import { TestWithSelect } from "./contextTypes"
export type ActionsReducer =ActionsInitReducer| ActionsUpdateReducer
//Action INIT 
export type ActionsInitReducer =
{
    type: ActionInitType ,
    payload: TestWithSelect[]
}
export type ActionInitType = "init-state" 

/*-----------------------Action Update Reducer--------------------- */
export type ActionsUpdateReducer=ActionsQuestionReducer | ActionsMacthReducer | ActionsChoisesReducer
export type PayloadAction ={
    currentIndexTest: number,
} 
//Action of Question
export type ActionsQuestionReducer = 
{
    type: ActionQuestionType ,
    payload: PayloadAction & {
        data: PayloadQuestion
    }
}
export type PayloadQuestion = {
    response: string
}

export type ActionQuestionType = "question-update-response" 

//Action of Macth
export type ActionsMacthReducer =
{
    type: ActionMatchType ,
    payload: PayloadAction &{
        data: PayloadMacth
    }
}

export type ActionMatchType = 
    "macth-select-choise" | 
    "macth-unselec-choise"

export type PayloadMacth={index: number, columnA: boolean}
//Action of Choises
export type ActionsChoisesReducer =
{
    type: ActionChoisesType ,
    payload: PayloadAction &{
        data: PayloadChoises
    }
}

export type ActionChoisesType = 
    "choises-select-choise" | 
    "choises-unselec-choise"
export type PayloadChoises = {
    index: number
}


export const enum ActionRoutes{
    QUESTION= "question",
    COMPLETE= "complete",
    MATCH= "match",
    CHOISES= "choises",
    INIT="init"
}
export type Actions={
    //choises
    selectChoise: (payload: PayloadAction & {data: PayloadChoises})=> void,
    setResponseOfQuestion:(payload: PayloadAction & {data: PayloadQuestion})=> void
}