import { Complete } from "@/types/contextTypes"
type Props ={
    complete: Complete,
    onHandlerChange: (response:string, index: number)=> void,
}
export const TestComplete =({complete,onHandlerChange}:Props)=>{
    return(
        <form className="flex flex-col gap-3">
            <p>Completa los espacios en blanco:</p>
            {complete.map((item, index)=>{
                const {sentence, response}=item
                const beforeInput = sentence.split("<complete>")[0]
                const correctInput = sentence.match(/<complete>(.*?)<\/complete>/)
                const afterInput = sentence.split("</complete>")[1]
                return(
                    <div key={`${sentence}-${index}`}>
                        <span>{beforeInput}</span>
                        <input 
                            name={`complete-${index}`} 
                            className="bg-transparent text-green-400 border-0 border-b border-gray-400 focus:outline-none focus:border-white" 
                            type="text" 
                            value={response}   
                            onChange={(e)=> onHandlerChange(e.target.value, index)} 
                        />
                        <span>{afterInput}</span>
                    </div>
                )
                
            })}
        </form>
    )
}