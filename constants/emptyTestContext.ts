import { TestWithSelect } from "@/types/contextTypes";
import { TestContextType } from "@/types/contextTypes";
export const emptyTestContext: TestContextType ={
    tests:[{
        about: "",
        choises:{
            items: [{correct:false, text:"", selected: false }],
            revelate: false
        },
        complete:{
            items: [{response:"",sentence:""}],
            revelate: false
        },
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
            currentPlay: 1,
            revelate: false
        },
        question:{response:"",sentence:"", revelate: false}
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
        selectMatchColumnB(payload) {},
        setResponseComplete(payload) {},
        toggleRevelateChoises(payload) {},
        toggleRevelateComplete(payload) {},
        toggleRevelateMacth(payload) {},
        toggleRevelateQuestion(payload) {}
    }
}
