import { Test, Choise ,Match} from "./shemaTest"
export type TestContextType ={
    tests: TestWithSelect[],
    setTests: (tests:TestWithSelect[])=> void,
    content: string,
    setContent: (content:string)=> void,
    apikey:string,
    setApiKey:(apikey:string)=> void
}
export type TestWithSelect =Omit<Test, "choises" | "question" | "complete"> & {
    choises:ChoiseWithSelect,
    question: {
        sentence: string,
        response:string
    },
    complete:{
        sentence:string,
        response:string
    }[]
}
export type ChoiseWithSelect = Choise []&{
    selected: boolean
}[]