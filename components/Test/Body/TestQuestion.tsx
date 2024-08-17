
type Props ={
    question: string,
    response:string,
    onHandlerChange: (answer:string)=> void,
    checkResponse: string,
    correct: boolean,
    revelate: boolean,
}

export const TestQuestion =({onHandlerChange, question, response, checkResponse, revelate, correct} : Props)=>{
    return(
        <form className="flex flex-col gap-4">
            <p className="">{question}</p>

            <textarea 
                value={response}
                placeholder="Response la pregunta" 
                onChange={(e)=> onHandlerChange(e.target.value)}
                className="bg-transparent border border-gray-400 resize-none h-[200px] focus:outline-none focus:border-white rounded-lg p-3"
            />

            {checkResponse && revelate ? 
                <div className="flex flex-col gap-3 pl-2 pt-4 text-gray-400 font-semibold">
                    <span className={`${correct? "text-green-400":"text-red-400"}`}>{correct? "Correcto": "Incorrecto"}</span>
                    <p>{checkResponse}</p>
                </div> 
            :null}
        </form>
    )
}