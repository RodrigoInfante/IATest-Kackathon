
type Props ={
    question: string,
    response:string,
    onHandlerChange: (answer:string)=> void
}
export const TestQuestion =({onHandlerChange,question,response}:Props)=>{
    return(
        <form className="flex flex-col gap-4">
            <p className="">{question}</p>
            <textarea 
                value={response}
                placeholder="Response la pregunta" 
                onChange={(e)=> onHandlerChange(e.target.value)}
                className="bg-transparent border border-gray-400 resize-none h-[200px] focus:outline-none focus:border-white rounded-lg p-3"
            />
        </form>
    )
}