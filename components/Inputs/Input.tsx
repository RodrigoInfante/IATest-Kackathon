import { InputProps } from "@/types/formTypes"
export const Input = ({type,className,placeholder, value, handlerChange,id}:InputProps)=>{

    return(
        <input 
            id={id}
            value={value} 
            type={type} 
            placeholder={placeholder}
            onChange={(e)=> handlerChange && handlerChange(e.target.value)} 
            className={"bg-black text-sm text-gray-primary focus:text-white font-medium p-2 outline-none rounded-sm focus:outline-1 focus:outline-primary focus:bg-gray-900"  + " " + className}/>
    )
}