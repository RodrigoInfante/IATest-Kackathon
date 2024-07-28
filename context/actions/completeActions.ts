import { Complete } from "@/types/contextTypes";
import { ActionsCompleteReducer } from "@/types/reducerType";
type State = Complete
export function completeActions(state : State, {type, payload}: ActionsCompleteReducer): State{
    const {data}= payload
    const {index, response}=data
    switch(type){
        case "complete-set-response":
            return state.map((item, ind)=>{
                if(ind!==index)return item
                return {
                    ...item,
                    response: response
                }
            })
    }
}