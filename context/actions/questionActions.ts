import { Question } from "@/types/contextTypes";
import {  ActionsQuestionReducer} from "@/types/reducerType";

type State = Question
export function questionAction (state : State, {type, payload } : ActionsQuestionReducer):State{
    
    switch(type){
        case "question-update-response" :
            return{
                    ...state,
                    response: payload.data.response
                }
                default: return state
        case "question-check-response":
            return {
                ...state,
                correct: payload.data.correct,
                checkResponse: payload.data.checkResponse
            }
    }   
    
}