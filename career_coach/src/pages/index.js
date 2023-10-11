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
    <div className = "container mx-auto max-w-[700px]"> 
      <div className=  "flex flex-col h-screen bg-gray-900"> 
        <h1 className= "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl"> Career Coach </h1>
          <div className= "flex-grow p-6"> 
            <div className = "flex flex-col space-y-4">
              {
              chatLog.map((message, index) => (
                <div key = {index} className = {`flex ${ 
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}>
                  <div className = {`${
                    message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                  } rounded-lg p-4 text-white max-w-sm`}> {message.message}
                </div>
                </div>
               ))   
            } 
          </div> 
            </div> 

      <form onSubmit = {handleSubmit} className = "flex-none p-6"> 
            <div className = "flex rounded-lg border border-gray-700 bg-gray-800"> 
      <input
        type="text" className = "flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
        placeholder="Type your message...."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        <button type="submit" className = "bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outLine-none hover:bg-purple-600 transition-colors duration-300"> Send</button>
          </div>
      </form>
      </div>
    </div> 
  )
}
