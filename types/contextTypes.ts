import { Test, Choise } from "./shemaTest"
export type TestContextType ={
    tests: TestWithSelect[],
    setTests: (tests:TestWithSelect[])=> void
}
export type TestWithSelect =Test & {
    choises:ChoiseWithSelect
}
export type ChoiseWithSelect = Choise []&{
    selected: boolean
}[]