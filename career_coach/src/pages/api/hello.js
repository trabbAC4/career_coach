// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios';

// export default async function handler(req,res) {
//     if (req.method !== 'POST') {
//         res.status(405).json({message: 'Message should be POST'});
//     }
//     else {
//         try {
//             const {body} = req;
//             const url = 'https://api.openai.com/v1/chat/completions'; //Retrieving OpenAI completions 
//             const headers = {                                    
//                     'Content-type': 'application/json',
//                     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` //Initiating Open-API key from env file 
//                 };
//             const response = await axios.post(url,data, {headers:headers})
//             res.status(200).json(response);
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({message: 'Something went wrong'})
//         }
//     }

// }