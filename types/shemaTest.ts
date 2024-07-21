export type TestList=Test[]

export type Test={
    about:string,
    choises: Choise[],
    question: string,
    match: {
        columnA:string, 
        columnB:string
    }[],
    complete: string[]
}
export type Choise={
    text:string,
    correct:boolean,
    selected: boolean,
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
    correct: boolean | null
}
export type MathItem={
    content:string, 
    selected: boolean
}