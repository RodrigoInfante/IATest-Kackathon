import { HeaderTool } from "./HeaderTool"
import { IndexTopic } from "./IndexTopic"
type Props ={
    types: string[],
    currentType:string,
    selectType:(mode:string)=> void
}
export const SelectMode =({currentType,selectType,types}:Props)=>{
    return (
        <div className="flex flex-col h-[500px] w-full max-w-[20%]">
            <HeaderTool>Formatos</HeaderTool>
            {types.map((type)=>(
                <IndexTopic key={type} about={type} current={currentType===type} goTo={()=>{}}/>
            ))}
        </div>
    )
}