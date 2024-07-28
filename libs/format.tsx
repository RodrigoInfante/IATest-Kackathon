import { TestWithSelect } from "@/types/contextTypes"
import { TestList,Match } from "@/types/shemaTest"

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
                        response: ""
                    }
                })
                ,
                revelate: false
            },
            
            question:{
                sentence: test.question,
                response: "",
                revelate: false
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