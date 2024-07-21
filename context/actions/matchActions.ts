import { TestWithSelect } from "@/types/contextTypes";
import { ActionsMacthReducer } from "@/types/reducerType";

type State = Pick<TestWithSelect, "match">
export function matchAction (state : State, {type, payload :{ data:{columnA, index}}} : ActionsMacthReducer):State{
    return state
    switch(type){
        case "macth-select-choise" :
        
    }   
}