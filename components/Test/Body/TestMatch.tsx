"use client"
import { ReactNode , useMemo } from "react"
import { Match } from "@/types/shemaTest"
type Props ={
    matchs: Match[],
    handlerChange: (index: number, columnA: boolean)=>void,
    revelate: boolean,
    indexTest:number
}
export const TestMatch =({matchs, handlerChange,revelate,indexTest}:Props)=>{
    
    const formatedMatchs= matchs.map((match, ind)=>{
        return{
            ...match,
            realIndex: ind
        }
    })
    const sortedArray= useMemo(()=> formatedMatchs.sort(()=> Math.random() > 0.5 ? 1 : -1), [indexTest])
    
    console.log(sortedArray) 
    return(
        <div className="px-3 py-2 flex-col">
            <p>Enlaza los elementos de la columna A con el elemento que se relaciona de la columna B</p>
            <div className="flex justify-between pt-3">
                <div className="flex flex-col gap-2 flex-1">
                    <ColumnTitle border="l">Columna A</ColumnTitle>

                    {formatedMatchs.map(({columnA:{content,selected, play}, correct,realIndex}, ind)=>
                          (<ColumnItem
                            columnA
                            key={`${content}-${ind}`}
                            ind={realIndex}
                            text={content}
                            onSelect={handlerChange}
                            select={selected}
                            correct={correct}
                            play={play}
                            revelate={revelate}
                        />)
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <ColumnTitle border="r">Columna B</ColumnTitle>
                    {sortedArray.map(({columnB:{content},realIndex}, ind)=>(
                        <ColumnItem
                            columnA={false}
                            key={`${content}-${ind}`}
                            ind={realIndex}
                            text={content}
                            onSelect={handlerChange}
                            select={matchs[realIndex].columnB.selected}
                            correct={matchs[realIndex].correct}
                            play={matchs[realIndex].columnB.play}
                            revelate={revelate}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
type ItemProps={
    ind:number, 
    text:string,
    columnA: boolean,
    onSelect:(index:number , columnA:boolean)=> void,
    select: boolean,
    correct: boolean| null,
    play: number | null,
    revelate: boolean
}
export const ColumnItem=({ind,text,columnA,onSelect, play,select ,revelate ,correct}:ItemProps)=>{
    const playColors=["", "bg-blue-400", "bg-yellow-400", "bg-violet-400", "bg-orange-400"]
    const ramdomPosition =Math.round( Math.random() * 10)
    const order = `order-[${ramdomPosition}]`
    let backgroudColor="bg-transparent"
    if(select)backgroudColor="bg-gray-400"
    if(play)backgroudColor=playColors[play]
    if(revelate && correct)backgroudColor="bg-green-400"
    if(revelate && !correct)backgroudColor="bg-red-400"
    return(
        <span 
            className={`flex gap-1 p-2 rounded-md justify-between font-semibold  text-lg max-w-72 cursor-pointer
                ${order}
                ${backgroudColor}
            `} onClick={()=> !play && onSelect(ind, columnA)}>
            {text}
            {revelate && 
                <span className="flex justify-center items-center p-2  text-white font-bold">{ind}</span>
            }
        </span>
    )
}
export const ColumnTitle =({children,border}:{children:ReactNode, border: "l" | "r"})=>{
    return(
        <p  className={`bg-gray-950 p-2 text-lg font-semibold ${border=="l"?`rounded-l-md`: "rounded-r-md"}`}>{children}</p>
    )
}