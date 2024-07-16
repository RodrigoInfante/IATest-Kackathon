import { Test } from "@/components/Test/Test"
import { TestProvider } from "@/context/TestContext"
export default async function Page({searchParams}:{searchParams:{"tests": string}}) {
	
	const tests =JSON.parse(searchParams.tests)
	return (
		<main className="flex min-h-screen flex-col items-center px-5 pt-20 lg:px-20 pb-20">
			<TestProvider tests={tests}>
				<Test ></Test>
			</TestProvider>
		</main>
	)	
}