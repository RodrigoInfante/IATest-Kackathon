import { ReactNode } from "react"
export const Placeholder = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="flex flex-col items-center gap-3 text-[#ada3a3] font-medium h-full justify-center">
			{children}
		</div>
		
	)
}