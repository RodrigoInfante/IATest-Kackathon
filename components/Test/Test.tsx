"use client"
import { TestHeader } from "./Header/TestHeader"
import { TestBody } from "./Body/TestBody"
import { TestFooter } from "./Footer/TestFooter"
import { SelectMode } from "../Tools/SelectType"
import { Tools } from "../Tools/Tools"
import useTest from "@/hooks/useTest"
import { useTestContext } from "@/context/TestContext"
import { useState, useEffect } from "react"
import { formatedPropTools } from "@/lib/formatedPropTools"
import { Document } from "../Document/Document"
import { Chat } from "../Chat/Chat"
import { DashboardResults } from "../DashboardResults/DashboardResults"
import { TypeTest } from "@/constants/typeTest"

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

	const returnTests = ()=> {
		setShowDashboardResults(false)
		changeType(TypeTest.CHOISE)
		toIndex(0)
	}

	useEffect(() => {
		typeTest === TypeTest.RESULTS? onShowAllResults(): setShowDashboardResults(false)
	},[typeTest])

	return (
		<div className="flex flex-col gap-1">
			<div className="relative flex h-[500px] bg-gray-950">
				<span className="hidden lg:block">
					<SelectMode currentType={typeTest} selectType={changeType} types={typeTestList} allResults={allResults}></SelectMode>
				</span>
				
				<div className="relative z-20 flex flex-col w-full shadow shadow-black bg-gray-900 lg:w-[60%] drop-shadow-2xl   border-gray-300 ">
					
					{showDashboardResults? 
						<DashboardResults returnTest={returnTests}/> 
						:
						<>
							<TestHeader 
								about={currentTest.about} 
								hasNextTest={position}
								nextTest={nextTest}
								previousTest={previousTest}
							/>

							<TestBody typeTest={typeTest} indexTest={currentIndex} test={tests[currentIndex]} validate={validate}/>
							
							<TestFooter
								currentIndex={currentIndex}
								lastTest={currentIndex===tests.length-1}
								totalTests={tests.length}
								validate={() => changeType(TypeTest.RESULTS)}
								typeTest={typeTest}
								currentTest={tests[currentIndex]}
							/>
						</>
					}
					
				</div>
					<span className="hidden lg:block">
					<Tools currentIndex={currentIndex} topics={formatedPropTools(tests)} toIndex={toIndex}/>

					</span>
			</div>
			
			{/* <div className="flex">
				<Document content={content}></Document> 

				<Chat content={content} apikey={apikey}></Chat>
			</div> */}
		</div>
		
		
	)
}