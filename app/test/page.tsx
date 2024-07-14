import { Test } from "@/components/Test/Test"
import { TestProvider } from "@/context/TestContext"
export default async function Page({searchParams}:{searchParams:{"tests": string}}) {
	
	const tests =JSON.parse(searchParams.tests)
	return (
		<main className="flex min-h-screen flex-col  pt-10 px-20">
			<TestProvider tests={tests}>
				<Test ></Test>
			</TestProvider>
		</main>
	)	
}