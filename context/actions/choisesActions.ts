import { Choise } from "@/types/shemaTest";
import { ActionsChoisesReducer} from "@/types/reducerType";

type State = Choise[]
export function choisesActions (state : State, {type, payload :{ data}} : ActionsChoisesReducer):State{
    
    switch(type){
        case "choises-select-choise" :
            return state.map((choise, index)=>{
                if(index !== data.index) return choise
                return {
                    ...choise,
                    selected: !choise.selected   
                    }
                } 
            ) 
    }   
    return state
}