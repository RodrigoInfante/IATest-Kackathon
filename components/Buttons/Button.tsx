"use client"
import { ReactNode } from "react"

type Props={
    children: ReactNode,
    handlerClick: ()=>void,
    className?: string
}
export const Button =({children,handlerClick,className}: Props)=>{
    return <button className={className} onClick={()=> handlerClick()}>{children}</button>
}