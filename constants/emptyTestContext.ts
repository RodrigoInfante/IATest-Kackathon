import { TestWithSelect } from "@/types/contextTypes";
import { TestContextType } from "@/types/contextTypes";
export const emptyTestContext: TestContextType ={
    tests:[{
        about: "",
        choises: [{correct:false, text:"", selected: false}],
        complete: [{response:"",sentence:""}],
        match:{
            items:[
                {
                    columnA:{
                        content:"",
                        selected: false,
                        play:null
                    },
                    columnB:{
                        content:"",
                        selected: false,
                        play:null
                    },
                    correct: null,
                    
                }
            ],
            currentPlay: 1
        },
        question:{response:"",sentence:""}
    }],
    setTests: (tests: TestWithSelect[])=>tests ,
    content: "",
    setContent : (content:string)=>{},
    apikey:"",
    setApiKey: (apikey:string)=>{},
    actions: {
        selectChoise(payload) {},
        setResponseOfQuestion(payload) {},
        selectMatchColumnA(payload) {},
        selectMatchColumnB(payload) {}
    }
}
