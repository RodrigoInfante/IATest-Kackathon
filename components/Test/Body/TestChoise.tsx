"use client"
import { Choise } from "@/types/shemaTest"
import { CheckBoxChecked } from "@/components/Icon/CheckBox/CheckBoxChecked"
import { CheckBoxEmpty } from "@/components/Icon/CheckBox/CheckBoxEmpty"
type Props={
    revelate: boolean,
    choise: Choise & {selected: boolean},
    onToggleChoise: ()=> void
}
export function TestChoise({choise ,revelate,onToggleChoise}:Props) {
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