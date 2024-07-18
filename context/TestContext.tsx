"use client"
import { createContext , ReactNode, useContext, useState} from "react";
import { TestContextType, TestWithSelect } from "@/types/contextTypes";
const TestContext = createContext<TestContextType>({
    tests:[{
        about: "",
        choises: [{correct:false, text:"", selected: false}],
        complete: [{response:"",sentence:""}],
        match:[{columnA:"",columnB:""}],
        question:{response:"",sentence:""}
    }],
    setTests: (tests: TestWithSelect[])=>tests ,
    content: "",
    setContent : (content)=>{},
    apikey:"",
    setApiKey: (apikey:string)=>{}
})
export function useTestContext (){
    return useContext(TestContext)
}

export const TestProvider=({children}:{ children:ReactNode})=>{
    const [testList, setTestList]= useState([{
        about: "",
        choises: [{correct:false, text:"", selected: false}],
        complete: [{response:"",sentence:""}],
        match:[{columnA:"",columnB:""}],
        question:{response:"",sentence:""}
    }])
    const [content , setContent]= useState("")
    const [apikey , setApiKey]= useState("")
    return <TestContext.Provider 
        value={
            {
                tests:testList, 
                setTests:(newTests:TestWithSelect[])=> {console.log(newTests);setTestList(newTests)},
                content,
                setContent,
                apikey,
                setApiKey
            }
        }>
        {children}
    </TestContext.Provider>
}
