import { Choise } from "@/types/shemaTest"
import { TestBodyAbout } from "./TestBodyAbout"
import { TestChoise } from "./TestChoise"
import { TestWithSelect } from "@/types/contextTypes"
import { useTestContext } from "@/context/TestContext"
import { TypeTest } from "@/constants/typeTest"
import { TestComplete } from "./TestComplete"
import { TestQuestion } from "./TestQuestion"
type Props ={
    test: TestWithSelect,
    validate: boolean,
    indexTest: number,
    typeTest: TypeTest
}
export const TestBody = ({test:{about,choises,question },validate,indexTest ,typeTest}:Props)=>{
    const {actions}=useTestContext()
    function updateChoise({indexChoise}:{indexChoise:number}){
        actions.selectChoise({currentIndexTest: indexTest, data: {index: indexChoise}})
    } 
    function updateQuestion(response:string){
        actions.setResponseOfQuestion({currentIndexTest:indexTest, data: {response}})
    }
    return (
        <div className="flex flex-col gap-3 px-5 py-3  h-[420px] lg:h-[380px] overflow-y-auto scrollbar-custom pt-5">
            <TestBodyAbout>{about}</TestBodyAbout>
            
            {typeTest===TypeTest.CHOISE && choises.map((choise, index)=>{
                return(
                    <TestChoise onToggleChoise={()=> updateChoise({indexChoise:index})} key={index} choise={choise as Choise & {selected: boolean}} revelate={validate}></TestChoise>
                )
            })}

            {typeTest===TypeTest.COMPLETE && <TestComplete />}
            {typeTest===TypeTest.QUESTION && <TestQuestion onHandlerChange={updateQuestion} response={question.response} question={question.sentence}/>}

        </div>
    )
}