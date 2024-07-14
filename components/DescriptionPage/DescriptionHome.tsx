import { ReactNode } from "react"

export const DescriptionHome = ({ children }: { children: ReactNode }) => {

	return (
		<p className="font-medium text-2xl leading-9">
			{children}
		</p>
	)
}