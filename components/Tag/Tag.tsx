import { ReactNode } from "react"

export const Tag = ({ children, color }: { children: ReactNode, color: string }) => {
	return (
		<span className={`pt-0.5 px-2  inline-flex items-center justify-center bg-gray-900  ${color} rounded-lg`}>
			{children}
		</span>
	)
}