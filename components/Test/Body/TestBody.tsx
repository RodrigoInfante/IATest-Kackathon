import { Choise } from "@/types/shemaTest"
import { TestBodyAbout } from "./TestBodyAbout"
import { TestChoise } from "./TestChoise"
import { TestWithSelect } from "@/types/contextTypes"
import { useTestContext } from "@/context/TestContext"
type Props ={
    test: TestWithSelect,
    validate: boolean,
    indexTest: number
}
export const TestBody = ({test:{about,choises },validate,indexTest}:Props)=>{
    const {setTests,tests}=useTestContext()
    function updateChoise({indexChoise}:{indexChoise:number}){
        const testsUpdated = tests.map((test, index)=>{
            if(indexTest!==index) return test
            return {
                ...test,
                choises: test.choises.map((choise , ind)=>{
                    if(indexChoise!==ind) return choise
                    return {
                        ...choise,
                        selected: !choise.selected 
                    }
                })
            } 
        }) 
        setTests(testsUpdated)
    }
    return (
        <div className="flex flex-col gap-3 px-5 py-3  h-[420px] lg:h-[380px] overflow-y-auto scrollbar-custom pt-5">
            <TestBodyAbout>{about}</TestBodyAbout>
            {choises.map((choise, index)=>{
                return(
                    <TestChoise onToggleChoise={()=> updateChoise({indexChoise:index})} key={index} choise={choise as Choise & {selected: boolean}} revelate={validate}></TestChoise>
                )
            })}
        </div>
    )
}