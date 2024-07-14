import { ReactNode } from "react"

export const TestAbout = ({ children }: { children: ReactNode }) => {
	return (
		<h1 className="text-2xl font-medium max-w-[350px] truncate">{children}</h1>
	)
}