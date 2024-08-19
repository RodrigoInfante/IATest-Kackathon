import { PrimaryButton } from "@/components/Buttons/PrimaryButton"
import { useTestContext } from "@/context/TestContext"
import { TypeTest } from "@/constants/typeTest"
import { TestWithSelect } from "@/types/contextTypes"
import { TestModule } from "@/modules/TestModule/TestModule"
import { Loader } from "@/components/Loader/Loader"
import { useState } from "react"

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
    const {actions, content, apikey}= useTestContext()
    const [checkingResponse, setCheckingResponse]= useState(false)

    const handlerRevelate = async ()=>{
        if(typeTest === TypeTest.MACTH){
            actions.toggleRevelateMacth({currentIndexTest: currentIndex, data:{revelate: !currentTest.match.revelate}})
        }

        if(typeTest === TypeTest.CHOISE){
            actions.toggleRevelateChoises({currentIndexTest: currentIndex, data:{revelate: !currentTest.choises.revelate}})
        }
        
        if(typeTest === TypeTest.COMPLETE){

            if(!currentTest.complete.items[0].checkResponse){

                setCheckingResponse(true)

                 const response = await TestModule.checkResponseComplete(currentTest.complete.items , content, apikey)
                 setCheckingResponse(false)

                if(response.ok){
                 actions.checkCompleteResponse({
                    currentIndexTest: currentIndex, data: currentTest.complete.items.map(((complete, index) => ({
                        ...complete,
                        checkResponse: response.schema.object.complete[index].checkResponse,
                        correct: response.schema.object.complete[index].correct
                    })))
                 })
                }
             }
            actions.toggleRevelateComplete({currentIndexTest: currentIndex, data:{revelate: !currentTest.complete.revelate}})
        }

        if(typeTest === TypeTest.QUESTION){

            if(!currentTest.question.checkResponse){
               setCheckingResponse(true) 

                const response = await TestModule.checkResponseQuestion(currentTest.question,content, apikey)
                setCheckingResponse(false)

               if(response.ok){
                actions.checkQuestionResponse({currentIndexTest: currentIndex, data: response.schema.object.question})
               }
            }
            actions.toggleRevelateQuestion({currentIndexTest: currentIndex, data:{revelate: !currentTest.question.revelate}})
        }
    }

    return(
        <footer className="flex justify-between py-3 px-4 items-center">
            <span className="text-gray-600">{currentIndex+1}/{totalTests}</span>
            <div className="flex gap-4">
                <PrimaryButton disabled={typeTest=== TypeTest.RESULTS} onClick={handlerRevelate}>
                    {checkingResponse?<Loader color="black"/>:"Mostrar Respuestas"}
                </PrimaryButton>

                <PrimaryButton disabled={!lastTest} onClick={validate}>Revisar Test</PrimaryButton>
            </div>
            
        </footer>
    )
}