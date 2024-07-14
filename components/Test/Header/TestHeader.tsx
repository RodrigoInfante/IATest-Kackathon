type Props = {
	about: string,
	nextTest: () => void,
	previousTest: () => void,
	hasNextTest: -1 | 0 | 1
}
import { NextButton } from "@/components/Buttons/NextButton"
import { PreviousButton } from "@/components/Buttons/PreviousButton"
import { TestAbout } from "./TestAbout"
export const TestHeader = ({ about, hasNextTest, nextTest, previousTest }: Props) => {
	return (
		<div className="flex justify-between  py-2 px-3 items-center border-b border-gray-400">
			<div className={`${hasNextTest===-1?"opacity-40":""}`} onClick={()=> previousTest()}><PreviousButton /></div>
			<TestAbout>{about}</TestAbout>
			<div className={`${hasNextTest===1?"opacity-40":""}`} onClick={()=> nextTest()}><NextButton /></div>
		</div>
	)
}