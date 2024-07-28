"use client"
import { createContext , ReactNode, useContext, useState, useReducer} from "react";
import { TestContextType, TestWithSelect } from "@/types/contextTypes";
import { emptyTestContext } from "@/constants/emptyTestContext";
import { testReducer } from "./reducer/testReducer";
import { Actions } from "@/types/reducerType";
import { PayloadAction, PayloadChoises, PayloadQuestion, PayloadMacth,PayloadComplete, PayloadToggleRevelate } from "@/types/reducerType";
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
    const setResponseComplete = (payload: PayloadAction & {data: PayloadComplete})=>{
        dispatch({type: "complete-set-response", payload})
    }
    const toggleRevelateMacth =(payload:PayloadAction & {data: PayloadToggleRevelate})=>{
        dispatch({type: "toggle-revelate-match", payload})
    }
    const toggleRevelateQuestion =(payload:PayloadAction & {data: PayloadToggleRevelate})=>{
        dispatch({type: "toggle-revelate-question", payload})
    }
    const toggleRevelateChoises =(payload:PayloadAction & {data: PayloadToggleRevelate})=>{
        dispatch({type: "toggle-revelate-choises", payload})
    }
    const toggleRevelateComplete =(payload:PayloadAction & {data: PayloadToggleRevelate})=>{
        dispatch({type: "toggle-revelate-complete", payload})
    }
    const actions:Actions ={
        selectChoise,
        setResponseOfQuestion,
        selectMatchColumnA,
        selectMatchColumnB,
        setResponseComplete,
        toggleRevelateMacth,
        toggleRevelateQuestion,
        toggleRevelateChoises,
        toggleRevelateComplete
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
