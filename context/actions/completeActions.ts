import { Complete } from "@/types/contextTypes";
import { ActionsCompleteReducer, PayloadCompleteUpdateResponse } from "@/types/reducerType";
type State = Complete
export function completeActions(state : State, {type, payload}: ActionsCompleteReducer): State{
    const {data}= payload
    
    switch(type){
        case "complete-set-response":
            const { index, response } = data as PayloadCompleteUpdateResponse
            return state.map((item, ind)=>{
                if(ind!==index)return item
                return {
                    ...item,
                    response: response
                }
            })
        
        case "complete-check-response":
            return state.map((item, ind)=>{
                const confirmData =data as Complete
                return {
                    ...item,
                    checkResponse: confirmData[ind].checkResponse as string,
                    correct: confirmData[ind].correct
                }
            })
    }
}