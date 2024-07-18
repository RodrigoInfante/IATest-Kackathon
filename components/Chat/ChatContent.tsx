import { Message } from "./Message"
import { Loader } from "../Loader/Loader"
type Props ={
    messages:{
        id:string,
        content:string,
        role:string
    }[],
    loading:boolean
    
}
export const ChatContent =({messages, loading}:Props)=>{
    return (
            <div className="flex flex-col gap-4 overflow-y-auto scrollbar-custom pb-16">
                {messages.map(m => (
                    <Message key={m.id} role={m.role} text={m.content}/>
                ))}
                {loading && <Loader/>}
            </div>
    )
}