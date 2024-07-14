import Image from "next/image"
export const ErrorRequestIcon = () => {
	return (
		<Image
			width={80}
			height={120}
			alt="pdf archive icon"
			src={"/error-request-icon.svg"}
			className="w-[60px] h-auto"
		/>
	)
}
