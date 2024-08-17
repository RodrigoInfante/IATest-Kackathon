import { Complete, Question, TestWithSelect } from "./contextTypes"
export type ActionsReducer =ActionsInitReducer| ActionsUpdateReducer
//Action INIT 
export type ActionsInitReducer =
{
    type: ActionInitType ,
    payload: TestWithSelect[]
}
export type ActionInitType = "init-state" 

/*-----------------------Action Update Reducer--------------------- */
export type ActionsUpdateReducer=
    ActionsQuestionReducer | 
    ActionsMacthReducer | 
    ActionsChoisesReducer | 
    ActionsCompleteReducer |
    ActionsToogleRevelateReducer

export type PayloadAction ={
    currentIndexTest: number,
} 
//Action of Question
export type ActionsQuestionReducer = 
{
    type: "question-update-response" ,
    payload: PayloadAction & {
        data: PayloadQuestionUpdateResponse 
    }
} |
{
    type: "question-check-response" ,
    payload: PayloadAction & {
        data: PayloadQuestionCheckResponse
    }
}

export type PayloadQuestionUpdateResponse = {
    response: string
}
export type PayloadQuestionCheckResponse = Question
export type ActionQuestionType = "question-update-response" | "question-check-response"

//Action of Macth
export type ActionsMacthReducer =
{
    type: ActionMatchType ,
    payload: PayloadAction &{
        data: PayloadMacth
    }
}

export type ActionMatchType = 
    "match-select-choise-columnA" | 
    "match-selec-choise-columnB"

export type PayloadMacth={index: number}

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

// Action Complete

export type ActionsCompleteReducer =
{
    type: "complete-set-response" ,
    payload: PayloadAction & {
        data: PayloadCompleteUpdateResponse
    }
} | 
{
    type: "complete-check-response" ,
    payload: PayloadAction & {
        data: PayloadCompleteCheckResponse
    }
}

export type ActionCompleteType = 
    "complete-set-response" | "complete-check-response"

export type PayloadCompleteUpdateResponse = {
    index: number,
    response: string
} 

export type PayloadCompleteCheckResponse = Complete

//Action ToggleRevelate
export type ActionsToogleRevelateReducer =
{
    type: ActionToggleRevelateType ,
    payload: PayloadAction &{
        data: PayloadToggleRevelate
    }
}

export type ActionToggleRevelateType = 
    "toggle-revelate-complete" |
    "toggle-revelate-choises" |
    "toggle-revelate-question" |
    "toggle-revelate-match"
export type PayloadToggleRevelate = {
    revelate: boolean
}

export const enum ActionRoutes{
    QUESTION= "question",
    COMPLETE= "complete",
    MATCH= "match",
    CHOISES= "choises",
    TOGGLEREVELATE="toggle",
    INIT="init"
}

export type Actions={
    selectChoise: (payload: PayloadAction & {data: PayloadChoises})=> void,
    setResponseOfQuestion:(payload: PayloadAction & {data: PayloadQuestionUpdateResponse})=> void,
    selectMatchColumnA: (payload: PayloadAction & {data: PayloadMacth})=> void,
    selectMatchColumnB: (payload: PayloadAction & {data: PayloadMacth})=> void,
    setResponseComplete: (payload: PayloadAction & {data: PayloadCompleteUpdateResponse})=> void,
    toggleRevelateMacth:(payload: PayloadAction & {data: PayloadToggleRevelate})=>void,
    toggleRevelateQuestion:(payload: PayloadAction & {data: PayloadToggleRevelate})=>void,
    toggleRevelateChoises:(payload: PayloadAction & {data: PayloadToggleRevelate})=>void,
    toggleRevelateComplete:(payload: PayloadAction & {data: PayloadToggleRevelate})=>void,
    checkQuestionResponse : (payload: PayloadAction & {data: PayloadQuestionCheckResponse})=>void,
    checkCompleteResponse : (payload: PayloadAction & {data: PayloadCompleteCheckResponse})=>void,
}