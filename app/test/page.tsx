"use client"
import { Test } from "@/components/Test/Test"
import { useTestContext } from "@/context/TestContext"
import { useRouter } from "next/navigation"
export default function Page() {
	const {tests,content}=useTestContext()
	const {push}=useRouter()
	if(tests[0].about==="" || content === "")return push("/404")
	return (
		<main className="flex min-h-screen flex-col items-center  pt-20  pb-20">
			<Test ></Test>
		</main>
	)	
}
