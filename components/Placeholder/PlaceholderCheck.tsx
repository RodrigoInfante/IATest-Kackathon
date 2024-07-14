import { CheckFileIcon } from "../Icon/CheckFile/CheckFileIcon"
import { Placeholder } from "./Placeholder"
export const PlaceholderCheck = () => {
	return <Placeholder>
		{/*<div className="flex justify-center gap-4 items-end px-6 ">*/}
		<CheckFileIcon />
						
		<p>Archivo Válido</p>
		<p>Generando Tests...</p>
	</Placeholder>
}