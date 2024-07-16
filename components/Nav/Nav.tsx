"use client"
import { SecondaryButton } from "../Buttons/SecondaryButton"
import { LinkGitHub } from "../Links/LinkGitHub"
import { PrimaryLink } from "../Links/PrimaryLink"
import { Button } from "../Buttons/Button"
import { useEffect, useState } from "react"
export const Nav =()=>{
    const[onTop, setOnTop]=useState(true)
    useEffect(()=>{
        function hanlderScroll(){
            setOnTop(!(window.scrollY>50))
        }
        document.body.addEventListener("scroll",hanlderScroll)
        return ()=>{
            document.body.removeEventListener("scroll", hanlderScroll)
        }
    },[])
    return (
        <nav className={`fixed w-full flex justify-center bg-black py-2 px-3 gap-2
                ${onTop? "lg:bg-transparent":"lg:bg-black"}
            `}>
            <div className="flex gap-2">
                <PrimaryLink href="/guia">Guía</PrimaryLink>
                <LinkGitHub/>
            </div>
            <div className="absolute right-0 px-3 flex gap-2 content-end">
                <Button className="hover:underline font-semibold text-lg py-2 px-3" handlerClick={()=>{}}>Registrarse</Button>
                <SecondaryButton handlerClick={()=>{}}>Iniciar Sesión</SecondaryButton>
            </div>
            
        </nav>
    )
}