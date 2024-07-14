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