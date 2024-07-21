import {  TestWithSelect} from "@/types/contextTypes";
import { ActionsChoisesReducer, ActionsQuestionReducer, ActionsReducer, ActionsMacthReducer } from "@/types/reducerType";
import { questionAction,choisesActions,matchAction } from "../actions";
import { ActionRoutes } from "@/types/reducerType";
type State = TestWithSelect[]

export function testReducer(state :State, action :ActionsReducer): State{
    
    if(action.type==="init-state")return action.payload
    
    const {payload:{currentIndexTest}}= action
    if(action.type.startsWith(ActionRoutes.QUESTION)){
        
        const newState =state.map((test, index)=>{
            if(index !== currentIndexTest)return test    
            
            return {
                    ...test,
                    question: questionAction( test.question, action as ActionsQuestionReducer)
                }
            })
        
        return newState
    }
    if(action.type.startsWith(ActionRoutes.CHOISES)){

        const newState = state.map((test, index)=>{
            if(index !== currentIndexTest)return test
            
            return{
                ...test,
                choises: choisesActions(test.choises, action as ActionsChoisesReducer)
            }
        })
        return newState
    }
    if(action.type.startsWith(ActionRoutes.MATCH)){

        const newState = state.map((test, index)=>{
            if(index !== currentIndexTest)return test
            
            return{
                ...test,
                match: matchAction(test.match, action as ActionsMacthReducer)
            }
        })
        return newState
    }
    return state
}