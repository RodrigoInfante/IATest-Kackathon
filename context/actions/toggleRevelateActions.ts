import { TestWithSelect } from "@/types/contextTypes";
import { ActionsToogleRevelateReducer } from "@/types/reducerType";
type State= TestWithSelect
export function toogleRevelateActions(state:State, {type, payload}: ActionsToogleRevelateReducer): State{
    const {data}=payload
    const {revelate}=data
    console.log(revelate, "desde action")
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
        case "toggle-revelate-choises":
            return{
                ...state,
                choises:{
                    ...state.choises,
                    revelate
                }
            }
        case "toggle-revelate-complete":
            return{
                ...state,
                complete:{
                    ...state.complete,
                    revelate
                }
            }
    }
    return state
}