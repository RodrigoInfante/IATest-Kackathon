import { useState, useEffect } from "react";
import { TestWithSelect } from "@/types/contextTypes";
import { TypeTest } from "@/constants/typeTest";
import { useMemo } from "react";
export default function useTest(tests: TestWithSelect[]){
    const [indexTest, setIndex]= useState(0)
    const [currentTest, setTest]= useState(tests[indexTest])
    const [position, setPosition]= useState<-1| 0| 1>(-1)
    const [typeTest, setTypeTest]=useState<TypeTest>(TypeTest.CHOISE)
    const typeTestList = useMemo(()=>(Object.values(TypeTest)),[])
    useEffect(()=>{
        let newPosition: -1|0| 1 = -1
        if(indexTest > 0)newPosition=0
        if(indexTest >= tests.length -1)newPosition= 1
        setPosition(newPosition)
    },[indexTest, tests])

    useEffect(()=>{setTest(tests[indexTest])},[indexTest,tests])
    
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
    function toIndex (index:number){
        setIndex(index)
    }
    function changeType(type: TypeTest){
        setTypeTest(type)
    }
    return {currentTest, nextTest, previousTest, position, currentIndex: indexTest, toIndex, typeTest, changeType, typeTestList}
    
}
