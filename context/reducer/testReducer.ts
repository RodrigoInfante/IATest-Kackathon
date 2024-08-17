import {  TestWithSelect} from "@/types/contextTypes";
import { ActionsChoisesReducer, ActionsQuestionReducer, ActionsReducer, ActionsMacthReducer, ActionsCompleteReducer,ActionsToogleRevelateReducer } from "@/types/reducerType";
import { questionAction,choisesActions,matchAction, completeActions,toogleRevelateActions } from "../actions";
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
                choises: {
                    ...test.choises,
                    items: choisesActions(test.choises.items, action as ActionsChoisesReducer)
                }
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

    if(action.type.startsWith(ActionRoutes.COMPLETE)){
        const newState = state.map((test, index)=>{
            if(index !== currentIndexTest)return test
            
            return{
                ...test,
                complete: {
                    ...test.complete,
                    items:completeActions(test.complete.items, action as ActionsCompleteReducer)
                }
            }
        })
        return newState
    }

    if(action.type.startsWith(ActionRoutes.TOGGLEREVELATE)){
        const newState = state.map((test, index)=>{
            if(index !== currentIndexTest)return test

            return toogleRevelateActions(test, action as ActionsToogleRevelateReducer)
        })
        return newState
    }
    return state
}