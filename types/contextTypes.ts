import { Test, Choise ,Match} from "./shemaTest"
import { Actions } from "./reducerType"
export type TestContextType ={
    tests: TestWithSelect[],
    setTests: (tests:TestWithSelect[])=> void,
    content: string,
    setContent: (content:string)=> void,
    apikey:string,
    setApiKey:(apikey:string)=> void,
    actions: Actions
}
export type TestWithSelect =Omit<Test, "choises" | "question" | "complete" | "macth"> & {
    choises: Choise[],
    question:Question,
    complete:Complete,
    match: Match[]
}
export type Question =  {
    sentence: string,
    response:string
}
export type Complete ={
    sentence:string,
    response:string
}[]

