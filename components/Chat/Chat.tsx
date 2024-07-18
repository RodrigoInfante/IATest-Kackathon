import { ChatHeader } from "./ChatHeader"
import { useChat } from "ai/react"
import { ChatContent } from "./ChatContent"
import { ButtonSend } from "../Buttons/Send"
type Props ={
    apikey:string,
    content:string
}
export const Chat = ({apikey,content}:Props)=>{
    const {messages,handleSubmit, input, handleInputChange,isLoading}=useChat({
        body:{apikey, content}, 
        initialMessages: [{
            id:"chat-initial-message",
            role :"assistant",
            content:"Hola puedes Hacerme cualquier pregunta del contenido del documento"
        }]
    })
    return <div className="relative flex flex-col bg-gray-950 max-w-[40%] max-h-[650px] overflow-hidden pb-16">
        <ChatHeader></ChatHeader>
        <ChatContent loading={isLoading} messages={messages}></ChatContent>

        <form className="flex absolute w-full bottom-0 pl-0.5 pr-5 pb-5" onSubmit={handleSubmit}>
            <input
            className="bottom-0  w-full p-2 mr-0.5 border border-gray-300 rounded shadow-xl text-black"
            value={input}
            placeholder="Pregunta..."
            onChange={handleInputChange}
            />
            <ButtonSend />
      </form>
    </div>
}