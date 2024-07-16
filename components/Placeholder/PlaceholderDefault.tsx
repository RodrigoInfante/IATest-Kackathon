import { PDFIcon } from "../PDFIcon/PDFIcon"
import { WordIcon } from "../WordIcon/WordIcon"
import { Placeholder } from "./Placeholder"
export const PlaceholderDefault = () => {
	return <Placeholder>
		<div className="flex justify-center gap-4 items-end px-6 ">
			<PDFIcon />
			<span className="text-[25px] font-bold text-white">&</span>
			<WordIcon />			
		</div>
		<span className="text-white opacity-90 underline text-sm">
			<p className="lg:hidden px-2">Seleccione Archivos .doc, .docx, .pdf</p>
			<p className="hidden lg:flex px-2 text-center">Arrastre o Seleccione Archivos .doc, .docx, .pdf</p>
		</span>
	</Placeholder>
}