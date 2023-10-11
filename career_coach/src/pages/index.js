import {useState, useEffect} from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import axios from 'axios';



const inter = Inter({ subsets: ['latin'] })

export default function Home(){ 
  const [inputValue, setInputValue] = useState(''); //Input value on the form 
  const [chatLog, setChatLog] = useState([]);       //Recording history of chat og 
  const [isLoading, setIsLoading] = useState(false); //Is loading functionality from chatbot

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, {type: 'user', message: inputValue }])
    sendMessage(inputValue);
    setInputValue('');  

  }

  const sendMessage = (message) => {
    const url = 'https://api.openai.com/v1/chat/completions'; //Retrieving OpenAI completions 
    const headers = {                                    
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` //Initiating Open-API key from env file 
    };
    const data = {
      model: "gpt-3.5-turbo-0301",  //Version of openai
      messages: [{"role": "user", "content": message}] 
    };
    setIsLoading(true);

    axios.post(url, data, {headers:headers}).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message: response.data.choices[0].message.content}])
      setIsLoading(false);
      
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }

  return (
    <>
      <h1> ChatGPT</h1>
      {
        chatLog.map((message, index) => (
          <div key = "index"> {message.message} </div>
        ))
      }
      <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="Type your message...."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Send</button>

      </form>
    </>
  )
}
