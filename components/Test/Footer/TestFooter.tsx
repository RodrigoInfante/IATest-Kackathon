import { PrimaryButton } from "@/components/Buttons/PrimaryButton"
type Props={
    totalTests: number,
    currentIndex:number,
    revelate?: boolean,
    validate: ()=> void,
    lastTest: boolean
}
export const TestFooter =({currentIndex, lastTest, revelate,totalTests,validate,}: Props)=>{
    return(
        <footer className="flex justify-between py-3 px-4 items-center">
            <span className="text-gray-600">{currentIndex+1}/{totalTests}</span>
            <PrimaryButton disabled={!lastTest} onClick={validate}>Revisar</PrimaryButton>
        </footer>
    )
}