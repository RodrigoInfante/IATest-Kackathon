import { Complete, Question } from "./contextTypes"

export type TestList=Test[]

export type Test={
    about:string,
    choises: {
        text:string,
        correct:boolean
    }[],
    question: string,
    match: {
        columnA:string, 
        columnB:string
    }[],
    complete: string[]
}

export type Choise={
    items:{
        text:string,
    correct:boolean,
    selected: boolean,
    }[],
    revelate: boolean
}

export type TestRequest ={
    ok: true,
    schema: {
        object:{
            tests: TestList
        }
    }, content:"string"
}

export type TestRequestError={
    ok: false,
    error: string
}

export type Match ={
    columnA:MathItem,
    columnB:MathItem,
    correct: boolean | null,
}

export type MathItem={
    content:string, 
    selected: boolean,
    play:number | null
}

export type CheckQuestionRequest ={
    ok: true,
    schema: {
        object:{
            question: Question
        }
    }
}

export type CheckCompleteRequest ={
    ok: true,
    schema: {
        object:{
            complete: Complete
        }
    }
}