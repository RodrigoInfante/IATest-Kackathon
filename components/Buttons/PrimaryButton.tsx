import { ReactNode } from "react"

type Props={
    onClick: ()=> void,
    children: ReactNode,
    disabled?:boolean
}
export const PrimaryButton=({onClick, children, disabled}:Props)=>{
    return(
        <button 
            disabled={disabled} 
            className={`bg-white text-black font-medium text-lg py-2 px-3 
                rounded-full ${disabled && "opacity-35"}`} 
            onClick={()=> onClick()}
            >
            {children}
        </button>
    )
}