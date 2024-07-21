"use client"
import { ReactNode, useCallback } from "react"
import { Match } from "@/types/shemaTest"
type Props ={
    matchs: Match[],
    handlerChange: (index: number, columnA: boolean)=>void
}
export const TestMatch =({matchs, handlerChange}:Props)=>{
    
    
    
    return(
        <div className="px-3 py-2 flex-col">
            <p>Enlaza los elementos de la columna A con el elemento que se relaciona de la columna B</p>
            <div className="flex justify-between pt-3">
                <div className="flex flex-col gap-2 flex-1">
                    <ColumnTitle border="l">Columna A</ColumnTitle>

                    {matchs.map(({columnA:{content,selected, play}, correct}, ind)=>(
                        <ColumnItem
                            columnA
                            key={`${content}-${ind}`}
                            index={ind}
                            text={content}
                            onSelect={handlerChange}
                            select={selected}
                            correct={correct}
                            play={play}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2 ">
                    <ColumnTitle border="r">Columna B</ColumnTitle>
                    {matchs.map(({columnB:{content,selected, play}, correct}, ind)=>(
                        <ColumnItem
                            columnA={false}
                            key={`${content}-${ind}`}
                            index={ind}
                            text={content}
                            onSelect={handlerChange}
                            select={selected}
                            correct={correct}
                            play={play}
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
    correct: boolean| null,
    play: number | null;
}
export const ColumnItem=({index,text,columnA,onSelect, play,select}:ItemProps)=>{
    const playColors=["", "bg-blue-400", "bg-yellow-400", "bg-violet-400", "bg-orange-400"]
    return(
        <span 
            className={`p-2 rounded-md font-semibold  text-lg max-w-72 cursor-pointer
                ${select && "bg-gray-400"}
                ${play && playColors[play]}
            
            `} onClick={()=> !play && onSelect(index, columnA)}>
            {text}
        </span>
    )
}
export const ColumnTitle =({children,border}:{children:ReactNode, border: "l" | "r"})=>{
    return(
        <p  className={`bg-gray-950 p-2 text-lg font-semibold ${border=="l"?`rounded-l-md`: "rounded-r-md"}`}>{children}</p>
    )
}