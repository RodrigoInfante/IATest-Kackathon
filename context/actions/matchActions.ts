import { ActionsMacthReducer } from "@/types/reducerType";
import { Match } from "@/types/shemaTest";
type State ={items: Match[], currentPlay: number}
export function matchAction (state : State, {type, payload :{ data:{ index: indexItem}}} : ActionsMacthReducer):State{
    const columnSelected= state.items.map((match, index)=>{
        if(match.columnB.selected)return {
            item: match,
            columnA: false,
            index
        }
        if(match.columnA.selected)return {
            item: match,
            columnA: true,
            index
        }
        
    })
   
    switch(type){
        case "match-select-choise-columnA" :
            let nextPlay=false
            const updatedItems=state.items.map((match, ind)=>{
                const selected=columnSelected.filter((select)=> select!==undefined)
                if(selected.length===1){
                    if(selected[0].index === ind){
                        if(selected[0].columnA){
                            return{
                                ...match,
                                columnA:{
                                    ...match.columnA,
                                    selected: false
                                }
                            }
                        }else{
                            nextPlay=true
                            if(selected[0].index===indexItem){
                                return{
                                    ...match,
                                    columnB:{
                                        ...match.columnB,
                                        selected: false,
                                        play: state.currentPlay
                                    },
                                    columnA:{
                                        ...match.columnA,
                                        play:state.currentPlay
                                    },
                                    correct: true
                                }
                            }
                            return{
                                ...match,
                                columnB:{
                                    ...match.columnB,
                                    selected: false,
                                    play: state.currentPlay
                                },
                                correct: false
                            }
                        }
                    }
                    if(!selected[0].columnA && ind===indexItem){
                        return{
                            ...match,
                            columnA:{
                                ...match.columnA,
                                play:state.currentPlay
                            },
                            correct:false
                        }
                    }
                }
                if(ind===indexItem){
                    return{
                        ...match,
                        columnA:{
                            ...match.columnA,
                            selected: true
                        }
                    }
                }
                return{
                    ...match
                }
                
            })
            
            return {items: updatedItems, currentPlay:nextPlay? state.currentPlay+1: state.currentPlay}
        
        case "match-selec-choise-columnB":
            let nextPlayB=false
            const updatedItemsB=state.items.map((match, ind)=>{
                const selected=columnSelected.filter((select)=> select!==undefined)
                if(selected.length===1){
                    if(selected[0].index === ind){
                        if(!selected[0].columnA){
                            return{
                                ...match,
                                columnB:{
                                    ...match.columnB,
                                    selected: false
                                }
                            }
                        }else{
                            nextPlayB=true
                            if(selected[0].index===indexItem){
                                return{
                                    ...match,
                                    columnA:{
                                        ...match.columnA,
                                        selected: false,
                                        play: state.currentPlay
                                    },
                                    columnB:{
                                        ...match.columnB,
                                        play:state.currentPlay
                                    },
                                    correct: true
                                }
                            }
                            return{
                                ...match,
                                columnA:{
                                    ...match.columnA,
                                    selected: false,
                                    play: state.currentPlay
                                },
                                correct: false
                            }
                        }
                    }
                    if(selected[0].columnA && ind===indexItem){
                        return{
                            ...match,
                            columnB:{
                                ...match.columnB,
                                play:state.currentPlay
                            },
                            correct:false
                        }
                    }
                }
                if(ind===indexItem){
                    return{
                        ...match,
                        columnB:{
                            ...match.columnB,
                            selected: true
                        }
                    }
                }
                return{
                    ...match
                }
                
            })
            
            return {items: updatedItemsB, currentPlay:nextPlayB? state.currentPlay+1: state.currentPlay}
        default:
            return state
    }   
}