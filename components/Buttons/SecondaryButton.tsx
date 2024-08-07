"use client"
import { ReactNode } from "react"
import { Button } from "./Button"
type Props={
    children : ReactNode,
    handlerClick ?:()=> void
}
export const SecondaryButton =({children,handlerClick,}:Props)=>{
    return(
        <Button className="bg-primary hover:bg-secondary hover:text-gray-100 text-white font-semibold lg:text-lg py-1 lg:py-2 px-2 lg:px-3 rounded-sm" handlerClick={handlerClick}>{children}</Button>
    )
}