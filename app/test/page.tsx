import { Test } from "@/components/Test/Test"
import { TestProvider } from "@/context/TestContext"
export default async function Page({searchParams}:{searchParams:{"tests": string}}) {
	
	const tests =JSON.parse(searchParams.tests)
	return (
		<main className="flex min-h-screen flex-col px-5 pt-10 lg:px-20">
			<TestProvider tests={tests}>
				<Test ></Test>
			</TestProvider>
		</main>
	)	
}