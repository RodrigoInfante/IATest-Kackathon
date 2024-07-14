import Image from "next/image"
export const PDFIcon = () => {
	return (
		<Image
			width={80}
			height={120}
			alt="pdf archive icon"
			src={"/pdf-icon.svg"}
			className="w-[60px] h-auto"
		/>
	)
}
