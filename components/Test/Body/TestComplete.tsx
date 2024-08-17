import { Complete } from "@/types/contextTypes"

type Props ={
    complete: Complete,
    onHandlerChange: (response:string, index: number)=> void,
    revelate: boolean,

}

export const TestComplete =({complete, onHandlerChange, revelate}:Props)=>{
    return(
        <form className="flex flex-col gap-3">

            <p>Completa los espacios en blanco:</p>

            {complete.map((item, index)=>{
                const {sentence, response, checkResponse, correct}=item
                const beforeInput = sentence.split("<complete>")[0]
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

            {complete.map((item, index)=>{
                const {sentence, checkResponse, correct}=item

                return (
                    <div key={`${index}-${sentence}`}>
                        {checkResponse && revelate ? 
                            <div className="flex flex-col gap-3 pl-2 pt-4 text-gray-400 font-semibold">
                                <div>
                                    {index + 1}-
                                    <span className={`${correct? "text-green-400":"text-red-400"}`}>{correct? "Correcto": "Incorrecto"}</span>
                                </div>

                                <p>{checkResponse}</p>
                            </div> 
                        :null}
                    </div>
                )
            })}

        </form>
    )
}