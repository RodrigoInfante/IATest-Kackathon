"use client"
import { createContext , ReactNode, useContext, useState, useReducer} from "react";
import { TestContextType, TestWithSelect } from "@/types/contextTypes";
import { emptyTestContext } from "@/constants/emptyTestContext";
import { testReducer } from "./reducer/testReducer";
import { PayloadAction, PayloadChoises, PayloadQuestion, PayloadMacth } from "@/types/reducerType";
const TestContext = createContext<TestContextType >(emptyTestContext)
export function useTestContext (){
    return useContext(TestContext)
}

export const TestProvider=({children}:{ children:ReactNode})=>{
    const [stateTest, dispatch]=useReducer( testReducer , emptyTestContext.tests)
    const [content , setContent]= useState(emptyTestContext.content)
    const [apikey , setApiKey]= useState(emptyTestContext.apikey)
    
    const setTests=(tests:TestWithSelect[])=>{
        dispatch({type:"init-state", payload:tests})
    }
    const selectChoise =(payload:PayloadAction  & {data: PayloadChoises})=>{
        dispatch({type: "choises-select-choise", payload})
    }
    const setResponseOfQuestion =(payload:PayloadAction  & {data: PayloadQuestion})=>{
        dispatch({type: "question-update-response", payload})
    }
    const selectMatchColumnA =(payload:PayloadAction  & {data: PayloadMacth})=>{
        dispatch({type: "match-select-choise-columnA", payload})
    }
    const selectMatchColumnB =(payload:PayloadAction  & {data: PayloadMacth})=>{
        dispatch({type: "match-selec-choise-columnB", payload})
    }
    const actions ={
        selectChoise,
        setResponseOfQuestion,
        selectMatchColumnA,
        selectMatchColumnB
    }
    return <TestContext.Provider 
        value={
            {
                tests:stateTest, 
                setTests,
                content,
                setContent,
                apikey,
                setApiKey,
                actions
            }
        }>
        {children}
    </TestContext.Provider>
}
