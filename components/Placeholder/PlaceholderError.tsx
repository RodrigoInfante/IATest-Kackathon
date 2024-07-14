import { ErrorFileIcon } from "../Icon/ErrorFile/ErrorFileIcon"
import { Placeholder } from "./Placeholder"
export const PlaceholderError = () => {
	return <Placeholder>
		
		<ErrorFileIcon />				
		<p className="text-[#cb2525] text-center font-medium">Revise el tamaño del archivo o su extensión</p>
	</Placeholder>
}