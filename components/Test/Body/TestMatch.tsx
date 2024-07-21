"use client"
import { TestWithSelect } from "@/types/contextTypes"
import { useCallback } from "react"
type Props ={
    match: Pick<TestWithSelect, "match">
}
export const TestMatch =({match}:Props)=>{
    const {match : items}= match
    const handlerSelect = useCallback((index: number, columnA: boolean)=>{

    },[])
    
    return(
        <div className="px-3 py-2">
            <p>Enlaza los elementos de la columna A con el elemento que se relaciona de la columna B</p>
            <div className="flex justify-between">
                <div>
                    {items.map(({columnA:{content,selected},correct}, ind)=>(
                        <ColumnItem
                            columnA
                            key={`${content}-${ind}`}
                            index={ind}
                            text={content}
                            onSelect={handlerSelect}
                            select={selected}
                            correct={correct}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
type ItemProps={
    index:number, 
    text:string,
    columnA: boolean,
    onSelect:(index:number , columnA:boolean)=> void,
    select: boolean,
    correct: boolean| null
}
export const ColumnItem=({index,text,columnA,onSelect}:ItemProps)=>{
    return(
        <span className="font-semibold text-lg max-w-72" onClick={()=> onSelect(index, columnA)}>
            {text}
        </span>
    )
}