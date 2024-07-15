import { PDFIcon } from "../PDFIcon/PDFIcon"
import { WordIcon } from "../WordIcon/WordIcon"
import { Placeholder } from "./Placeholder"
export const PlaceholderDefault = () => {
	return <Placeholder>
		<div className="flex justify-center gap-4 items-end px-6 ">
			<PDFIcon />
			<span className="text-[25px] font-bold text-[#ada3a3]">&</span>
			<WordIcon />			
		</div>
		<p><span className="hidden lg:block">Arrastre o</span>Seleccione Archivos .doc, .docx, .pdf</p>
	</Placeholder>
}