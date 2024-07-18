import { Profile } from "./Profile"
type Props ={
    text: string,
    role: string
}
export const Message =({role,text}:Props)=>{
    const isUser = role === "user"
    return (
        <article className={`flex flex-col pr-2 ${isUser&& "items-end"}` }>
            {!isUser&& <Profile>IA</Profile>}
            
            <div className="bg-gray-900 p-2 max-w-[80%] rounded-lg"  dangerouslySetInnerHTML={{
                    __html: text./*replace(/\n{2,}/g, '\n').*/replace(/\n/g, '<br/>'),
                }}>
            </div>
        </article>
    )
}