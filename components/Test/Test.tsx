"use client"
import { TestHeader } from "./Header/TestHeader"
import { TestBody } from "./Body/TestBody"
import { TestFooter } from "./Footer/TestFooter"
import { SelectMode } from "../Tools/SelectType"
import { Tools } from "../Tools/Tools"
import useTest from "@/hooks/useTest"
import { useTestContext } from "@/context/TestContext"
import { useState } from "react"
import { formatedPropTools } from "@/libs/formatedPropTools"
import { Document } from "../Document/Document"
import { Chat } from "../Chat/Chat"
import { DashboardResults } from "../DashboardResults/DashboardResults"

export const Test = () => {
	const {tests, content, apikey} = useTestContext() 
	const [validate, setValidate] = useState(false)
	const [allResults, setAllResults] = useState(false)
	const [showDashboardResults, setShowDashboardResults] = useState(false)

	const {
		currentTest,
		nextTest,
		position,
		previousTest, 
		currentIndex, 
		toIndex,
		changeType,
		typeTest,
		typeTestList,

	} = useTest(tests)

	const onShowAllResults = () => {
		setAllResults(true)
		setValidate(true)
		setShowDashboardResults(true)
	}

	return (
		<div className="flex flex-col gap-1">
			<div className="relative flex h-[500px] bg-gray-950">
				<SelectMode currentType={typeTest} selectType={changeType} types={typeTestList} allResults={allResults}></SelectMode>

				<div className="relative z-20 flex flex-col w-full shadow shadow-black bg-gray-900 lg:w-[60%] drop-shadow-2xl   border-gray-300 ">
					
					{showDashboardResults? 
						<DashboardResults/> 
						:
						<>
							<TestHeader 
								about={currentTest.about} 
								hasNextTest={position}
								nextTest={nextTest}
								previousTest={previousTest}
							/>

							<TestBody typeTest={typeTest} indexTest={currentIndex} test={tests[currentIndex]} validate={validate}/>

						</>
					}
					
					<TestFooter
						currentIndex={currentIndex}
						lastTest={currentIndex===tests.length-1}
						totalTests={tests.length}
						validate={onShowAllResults}
						typeTest={typeTest}
						currentTest={tests[currentIndex]}
					/>
					
				</div>

				<Tools currentIndex={currentIndex} topics={formatedPropTools(tests)} toIndex={toIndex}/>
			</div>
			
			<div className="flex">
				<Document content={content}></Document> 

				<Chat content={content} apikey={apikey}></Chat>
			</div>
		</div>
		
		
	)
}