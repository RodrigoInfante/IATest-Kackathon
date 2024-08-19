import { Complete, TestWithSelect } from "@/types/contextTypes"
import { TestList } from "@/types/shemaTest"

export function addPropsClientUi(tests: TestList): TestWithSelect[]{
    return tests.map((test)=>{
        return {
            about:test.about, 
            
            choises:{
                items:test.choises.map((choise)=>{
                    return {
                        ...choise,
                        selected: false,
                        
                    }
                }),
                revelate: false
            } ,
            
            complete: {
                items:test.complete.map((complete)=>{
                    return{
                        sentence: complete,
                        response: "",
                        correct: false,
                        checkResponse: ""
                    }
                })
                ,
                revelate: false
            },
            
            question:{
                sentence: test.question,
                response: "",
                revelate: false,
                correct: false,
                checkResponse: ""
            },
            
            match: {
                items:test.match.map((item)=>{
                    return {
                        columnA:{
                            content: item.columnA,
                            selected:false,
                            play: null
                        },
                        columnB:{
                            content: item.columnB,
                            selected:false,
                            play: null
                        },
                        correct: null ,
                    } 
                }),
                currentPlay: 1,
                revelate:false
            }
        }
    }) 
}

export function completeResponseToIAModelFormatted(complete: Complete){
    let stringFormatted: string= ''

    complete.forEach((item)=>{
        stringFormatted += `
            {sentence: ${item.sentence}, response: ${item.response}}
        `
    })

    return stringFormatted
}
