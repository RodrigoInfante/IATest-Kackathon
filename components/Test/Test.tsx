"use client"
import { ReactNode } from "react"
import { TestHeader } from "./Header/TestHeader"
import { TestBody } from "./Body/TestBody"
import { TestFooter } from "./Footer/TestFooter"
import useTest from "@/hooks/useTest"
import { useTestContext } from "@/context/TestContext"
import { useState } from "react"

export const Test = () => {
	const {tests}=useTestContext()
	const {currentTest,nextTest,position,previousTest, currentIndex}= useTest(tests)
	const [validate, setValidate]=useState(false)
	return (
		<div className="flex flex-col w-[550px] drop-shadow-2xl shadow-white  border-gray-300 border rounded-[30px]">
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
	)
}