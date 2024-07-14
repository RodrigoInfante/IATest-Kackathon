import Image from "next/image"
export const CheckFileIcon = () => {
	return (
		<Image
			width={80}
			height={120}
			alt="pdf archive icon"
			src={"/check-file-icon.svg"}
			className="w-[60px] h-auto"
		/>
	)
}
