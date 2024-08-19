import { ReactNode } from "react"

export const DescriptionHome = ({ children }: { children: ReactNode }) => {

	return (
		<p className="font-medium text-xl lg:text-2xl leading-9">
			{children}
		</p>
	)
}