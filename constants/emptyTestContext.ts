import { TestWithSelect } from "@/types/contextTypes";
import { TestContextType } from "@/types/contextTypes";
export const emptyTestContext: TestContextType ={
    tests:[{
        about: "",
        choises: [{correct:false, text:"", selected: false}],
        complete: [{response:"",sentence:""}],
        match:[
            {
                columnA:{
                    content:"",
                    selected: false
                },
                columnB:{
                    content:"",
                    selected: false
                },
                correct: null
                
            }],
        question:{response:"",sentence:""}
    }],
    setTests: (tests: TestWithSelect[])=>tests ,
    content: "",
    setContent : (content:string)=>{},
    apikey:"",
    setApiKey: (apikey:string)=>{},
    actions: {
        selectChoise(payload) {},
        setResponseOfQuestion(payload) {}
    }
}
