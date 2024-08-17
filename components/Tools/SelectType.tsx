import { HeaderTool } from "./HeaderTool"
import { IndexTopic } from "./IndexTopic"
import { TypeTest } from "@/constants/typeTest"
type Props ={
    types: TypeTest[],
    currentType:string,
    selectType:(mode:TypeTest)=> void,
    allResults: boolean,
}
export const SelectMode =({currentType, selectType, types, allResults}:Props)=>{
    return (
        <div className="flex flex-col h-[500px] w-full max-w-[20%]">
            <HeaderTool>Formatos</HeaderTool>
            {types.map((type)=>{
                if(!allResults && type == TypeTest.RESULTS)return
                return(
                <IndexTopic key={type} about={type} current={currentType===type} goTo={()=>{
                    selectType(type)
                }}/>
            )})}
        </div>
    )
}