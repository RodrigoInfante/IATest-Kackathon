import { useState, useEffect } from "react";
import { TestWithSelect } from "@/types/contextTypes";
export default function useTest(tests: TestWithSelect[]){
    const [indexTest, setIndex]= useState(0)
    const [currentTest, setTest]= useState(tests[indexTest])
    const [position, setPosition]= useState<-1| 0| 1>(-1)
    
    useEffect(()=>{
        let newPosition: -1|0| 1 = -1
        if(indexTest > 0)newPosition=0
        if(indexTest >= tests.length -1)newPosition= 1
        setPosition(newPosition)
    },[indexTest, tests])
    
    function nextTest(){
        let nextIndex = indexTest >= tests.length -1? tests.length -1 : indexTest +1  
        setIndex(nextIndex)
        setTest(tests[nextIndex])
    }
    function previousTest(){
        let nextIndex = indexTest <= 0 ? 0  : indexTest - 1 
        setIndex(nextIndex)
        setTest(tests[nextIndex])
    }
    return {currentTest, nextTest, previousTest, position, currentIndex: indexTest}
    
}