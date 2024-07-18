import { ReactNode } from "react"

export const Profile = ({children}:{children:ReactNode})=>{
    return(
        <div className="flex justify-center items-center w-8 h-8 text-lg font-semibold">
            {children}
        </div>
    )
}