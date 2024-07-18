import {  ReactNode } from "react"

type Props ={
    children: ReactNode
}
export const Frame =({children}:Props)=>{
    return(
        <div className="border-[20px] border-gray-950 overflow-y-auto max-w-[60%] scrollbar-custom max-h-[650px]">
            <div className="bg-gray-700 p-4">
                {children}
            </div>
        </div>
    )
}