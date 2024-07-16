import Link from "next/link";
import { ReactNode } from "react";
type Props ={
    href: string,
    children:ReactNode,
    className?: string
}
export const PrimaryLink =({children,href,className}:Props)=>{
    return(
        <Link href={href} className={"font-semibold hover:underline text-white text-lg py-2 px-3 " + className}> 
            {children}
        </Link>
    )
}