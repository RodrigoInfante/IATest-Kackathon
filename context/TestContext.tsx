"use client"
import { createContext , ReactNode, useContext, useState} from "react";
import { TestContextType, TestWithSelect } from "@/types/contextTypes";
import { TestList } from "@/types/shemaTest";
const TestContext = createContext<TestContextType>({
    tests:[{about: "",choises: [{correct:false, text:"", selected: false}]}],
    setTests: (tests: TestWithSelect[])=>tests 
})
export function useTestContext (){
    return useContext(TestContext)
}

export const TestProvider=({tests,children}:{tests:TestList, children:ReactNode})=>{
    const [testList, setTestList]= useState(addSelectedField(tests))
    return <TestContext.Provider value={{tests:testList, setTests:(newTests:TestWithSelect[])=> {console.log(newTests);setTestList(newTests)}}}>
        {children}
    </TestContext.Provider>
}
function addSelectedField(tests: TestList): TestWithSelect[]{
    return tests.map((test)=>{
        return {
            ...test, 
            choises: test.choises.map((choise)=>{
                return {
                    ...choise,
                    selected: false
                }
            })}
    })
}