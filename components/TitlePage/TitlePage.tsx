import { ReactNode } from "react"

export const TitlePage = ({
	children
}: { children: ReactNode }) => {
	return (
		<h1 className="text-[40px] font-bold title-shadow">
			{children}
		</h1>
	) 
}