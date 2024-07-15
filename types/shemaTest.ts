export type TestList=Test[]

export type Test={
    about:string,
    choises: Choise[]
}
export type Choise={
    text:string,
    correct:boolean,
    selected: boolean
}
export type TestRequest ={
    ok: true,
    schema: {
        object:{
            tests: TestList
        }
    } 
}
export type TestRequestError={
    ok: false,
    error: string
}