import { TestWithSelect } from "@/types/contextTypes"
import { TestList } from "@/types/shemaTest"

export function addPropsClientUi(tests: TestList): TestWithSelect[]{
    return tests.map((test)=>{
        return {
            ...test, 
            choises: test.choises.map((choise)=>{
                return {
                    ...choise,
                    selected: false
                }
            }),
            complete: test.complete.map((complete)=>{
                return{
                    sentence: complete,
                    response: ""
                }
            }),
            question:{
                sentence: test.question,
                response: ""
            }
        }
    }) 
}