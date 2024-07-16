import { Input } from "./Input"
type Props={
    value: string,
    handlerChange: (value:string)=> void,
    id?:string
}
export const ApiKeyInput =({value,handlerChange, id}:Props)=>{
    return (
        <Input id={id} type="text" value={value} placeholder="Introduce Groq-Api-Key" handlerChange={handlerChange}/>
    )
}