import Image from "next/image"
export const CheckBoxEmpty = () => {
	return (
		<Image
			width={20}
			height={20}
			alt="pdf archive icon"
			src={"/check-empty-icon.svg"}
			className="w-[20px] h-[20px] mt-0.5"
		/>
	)
}
