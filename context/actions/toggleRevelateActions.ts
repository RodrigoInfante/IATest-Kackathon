import { TestWithSelect } from "@/types/contextTypes";
import { ActionsToogleRevelateReducer } from "@/types/reducerType";
type State= TestWithSelect
export function toogleRevelateActions(state:State, {type, payload}: ActionsToogleRevelateReducer): State{
    const {data}=payload
    const {revelate}=data
    switch(type){
        case "toggle-revelate-match":
        console.log(true, "desde action", revelate)    
        return{
                ...state,
                match:{
                    ...state.match,
                    revelate
                }
            }
        case "toggle-revelate-question":
            return{
                ...state,
                question:{
                    ...state.question,
                    revelate
                }
            }
    }
    return state
}