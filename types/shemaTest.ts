export type TestList=Test[]

export type Test={
    about:string,
    choises: Choise[],
    question: string,
    match: Match[],
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
    columnA:string,
    columnB:string,
}