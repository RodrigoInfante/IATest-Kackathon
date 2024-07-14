import Image from "next/image"
export const ErrorFileIcon = () => {
	return (
		<Image
			width={80}
			height={120}
			alt="pdf archive icon"
			src={"/error-file-icon.svg"}
			className="w-[60px] h-auto"
		/>
	)
}
