"use client"
import type { Choise } from "@/types/shemaTest"
import { CheckBoxChecked } from "@/components/Icon/CheckBox/CheckBoxChecked"
import { CheckBoxEmpty } from "@/components/Icon/CheckBox/CheckBoxEmpty"
type Props={
    choises: {
        text:string,
        correct:boolean,
        selected: boolean,
    }[],
    onToggleChoise: ({indexChoise}:{indexChoise:number})=> void,
    revelate: boolean,
    validate: boolean
}
export function TestChoise({choises,onToggleChoise,revelate,validate}:Props){
    console.log(revelate)
    return(
        <div className="flex flex-col gap-2">
            <p>Selecciona las oraciones que consideres verdaderas :</p>
            {choises.map((choise , ind)=><Choise key={ind} choise={choise} onToggleChoise={()=>onToggleChoise({indexChoise:ind})} revelate={ validate || revelate}/>)}
        </div>
    )
}

type ChoiseProps={
    revelate: boolean,
    choise: {
        text:string,
        correct:boolean,
        selected: boolean,
    },
    onToggleChoise: ()=> void
}
export function Choise({choise ,revelate,onToggleChoise}:ChoiseProps) {
    const {correct,selected,text} = choise
    const styleRevelate={
        correct: "bg-green-400",
        incorrect: "bg-red-400",
    }
    return(
        <span 
            className={`flex gap-3 p-1 cursor-pointer rounded-md 
                ${revelate && styleRevelate[correct===selected?"correct":"incorrect"]}`} 
            onClick={()=> {
                onToggleChoise()
            }}>
            
            <input type="checkbox" className="hidden" value={`${selected}`} />
            
            {selected?<CheckBoxChecked/>: <CheckBoxEmpty/>}
            
            <p className="">{text}</p>
        </span>
    )
}