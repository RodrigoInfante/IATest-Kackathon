"use client"
import { TestHeader } from "./Header/TestHeader"
import { TestBody } from "./Body/TestBody"
import { TestFooter } from "./Footer/TestFooter"
import { Tools } from "./Tools/Tools"
import useTest from "@/hooks/useTest"
import { useTestContext } from "@/context/TestContext"
import { useState } from "react"
import { formatedPropTools } from "@/libs/formatedPropTools"
export const Test = () => {
	const {tests}=useTestContext()
	const {currentTest,nextTest,position,previousTest, currentIndex, toIndex}= useTest(tests)
	const [validate, setValidate]=useState(false)
	return (
		<div className="relative flex h-[500px]">
			<div className="relative z-20 flex flex-col w-full shadow shadow-black bg-gray-900 md:w-[550px] drop-shadow-2xl   border-gray-300  rounded-[10px]">
				<TestHeader 
					about={currentTest.about} 
					hasNextTest={position}
					nextTest={nextTest}
					previousTest={previousTest}
				/>
				<TestBody indexTest={currentIndex} test={tests[currentIndex]} validate={validate}/>
				<TestFooter
					currentIndex={currentIndex}
					lastTest={currentIndex===tests.length-1}
					totalTests={tests.length}
					validate={()=> setValidate(true)}
				/>
			</div>
			<Tools currentIndex={currentIndex} topics={formatedPropTools(tests)} toIndex={toIndex}/>
		</div>
		
	)
}