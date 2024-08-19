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
            setOnTop(!(window.scrollY>10))
        }
        document.addEventListener("scroll",hanlderScroll)
        return ()=>{
            document.removeEventListener("scroll", hanlderScroll)
        }
    },[])
    return (
        <nav className={`fixed w-full z-50 flex justify-between lg:justify-center pl-4 py-2 lg:px-3 gap-2
                ${onTop? "bg-transparent":"bg-black"}
            `}>
            <div className="flex gap-2 flex-row-reverse lg:flex-row">
                <PrimaryLink className="underline lg:decoration-transparent hover:lg:decoration-white" href="/guia">Guía</PrimaryLink>
                <PrimaryLink className="underline lg:decoration-transparent hover:lg:decoration-white" href="/">Home</PrimaryLink>
                <LinkGitHub className="hidden lg:block"/>
            </div>
        </nav>
    )
}