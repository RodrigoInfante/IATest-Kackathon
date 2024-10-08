import { TestBodyAbout } from "./TestBodyAbout"
import { TestChoise } from "./TestChoise"
import { TestWithSelect } from "@/types/contextTypes"
import { useTestContext } from "@/context/TestContext"
import { TypeTest } from "@/constants/typeTest"
import { TestComplete } from "./TestComplete"
import { TestQuestion } from "./TestQuestion"
import { TestMatch } from "./TestMatch"

type Props ={
    test: TestWithSelect,
    validate: boolean,
    indexTest: number,
    typeTest: TypeTest
}

export const TestBody = ({test,validate,indexTest ,typeTest}:Props)=>{
    const{about, choises, question, match, complete } = test
    const {actions}= useTestContext()
    
    function updateChoise({indexChoise}:{indexChoise:number}){
        actions.selectChoise({currentIndexTest: indexTest, data: {index: indexChoise}})
    } 

    function updateQuestion(response:string){
        actions.setResponseOfQuestion({currentIndexTest:indexTest, data: {response}})
    }
    
    function updateComplete(response: string , indexComplete: number){
        actions.setResponseComplete({currentIndexTest: indexTest, data: { index: indexComplete, response }})
    }

    function updateMatch(index: number, columnA: boolean){
        if(columnA)return actions.selectMatchColumnA({currentIndexTest:indexTest, data:{index}})
        return actions.selectMatchColumnB({currentIndexTest:indexTest, data:{index}})
    }

    return (
        <div className="flex flex-col gap-3 px-5 py-3  h-[420px] lg:h-[380px] overflow-y-auto pt-5">
            <TestBodyAbout>{about}</TestBodyAbout>
            
            {typeTest===TypeTest.CHOISE && <TestChoise choises={choises.items} onToggleChoise={updateChoise} revelate={choises.revelate} validate={validate}/>}
            {typeTest===TypeTest.MACTH && <TestMatch indexTest={indexTest} matchs={match.items} revelate={match.revelate} handlerChange={updateMatch}/>}
            {typeTest===TypeTest.COMPLETE && <TestComplete revelate={complete.revelate} complete={complete.items} onHandlerChange={updateComplete} />}
            {typeTest===TypeTest.QUESTION && <TestQuestion revelate={question.revelate} checkResponse={question.checkResponse} correct={question.correct} onHandlerChange={updateQuestion} response={question.response} question={question.sentence}/>}

        </div>
    )
}