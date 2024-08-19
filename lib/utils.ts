import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TestWithSelect } from "@/types/contextTypes"
import { Results } from "@/types/results"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function evalResults (tests: TestWithSelect[]){
  const results : Results= {
    correct: 0,
    incorrect: 0,
    unResponse: 0
  }

  tests.forEach((test)=>{
    const {choises , complete, question, match} = test;
    
    [choises.items, complete.items, [question], match.items].forEach( array => filterCorrrectProp(array, results))
       
  })

  return results
}

export function filterCorrrectProp(items: {correct: boolean | null}[], results: Results){
  items.forEach(item => {
    const {correct} = item

    if( item === null) return results.unResponse++
    
    correct? results.correct++ : results.incorrect ++
  })
}
