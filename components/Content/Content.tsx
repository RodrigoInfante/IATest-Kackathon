import { TestProvider } from "@/context/TestContext"
import { ReactNode } from "react"
export const Content = ({children}:{children:ReactNode})=>{
    return <TestProvider >
                {children}
            </TestProvider>
}