import { PrimaryButton } from "@/components/Buttons/PrimaryButton"
import { useTestContext } from "@/context/TestContext"
import { TypeTest } from "@/constants/typeTest"
import { TestWithSelect } from "@/types/contextTypes"
type Props={
    totalTests: number,
    currentIndex:number,
    revelate?: boolean,
    validate: ()=> void,
    lastTest: boolean,
    typeTest: TypeTest,
    currentTest: TestWithSelect
}
export const TestFooter =({currentIndex, lastTest ,totalTests,validate,typeTest,currentTest}: Props)=>{
    const {actions}=useTestContext()
    const handlerRevelate =()=>{
        if(typeTest === TypeTest.MACTH){
            actions.toggleRevelateMacth({currentIndexTest: currentIndex, data:{revelate: !currentTest.match.revelate}})
        }
    }
    return(
        <footer className="flex justify-between py-3 px-4 items-center">
            <span className="text-gray-600">{currentIndex+1}/{totalTests}</span>
            <div className="flex gap-4">
                <PrimaryButton onClick={()=>handlerRevelate()}>Revisar pregunta</PrimaryButton>
                <PrimaryButton disabled={!lastTest} onClick={validate}>Revisar Test Completo</PrimaryButton>
            </div>
            
        </footer>
    )
}