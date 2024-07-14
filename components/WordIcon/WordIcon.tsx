import Image from "next/image"
export const WordIcon = () => {
	return (
		<Image
			width={80}
			height={120}
			alt="pdf archive icon"
			className="w-[60px] h-auto"
			src={"/word-icon.svg"}
		/>
	)
}