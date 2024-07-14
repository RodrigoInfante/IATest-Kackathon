import { ReactNode } from "react"
import { ErrorRequestIcon } from "../Icon/ErrorRequest/ErrorRequestIcon"
import { Placeholder } from "./Placeholder"
export const PlaceholderBadRequest = ({ children }: { children?: ReactNode }) => {
	return <Placeholder>
		
		<ErrorRequestIcon />				
		<p className="text-[#cb2525] text-center font-medium">{children}</p>
	</Placeholder>
}