import { CheckCompleteRequest, CheckQuestionRequest, TestRequest, TestRequestError } from "@/types/shemaTest"
import { Question ,Complete} from "@/types/contextTypes"

export class TestModule {
	
	static async getShemaTest({ file,apikey }: { file: File, apikey:string }) :  Promise<TestRequest | TestRequestError> {
		const formData = new FormData()
		formData.set("file", file)

		formData.set("apikey", apikey)

		try{
			const response = await fetch(process.env.NODE_ENV==="production"?
				`${process.env.NEXT_PUBLIC_URL_API}`:
				`http://${window.location.host}/api/test`
				, 
				{
					method: "post",
					body: formData 
				})

			if (response.ok) {
				return {ok: true, ...await response.json() } as TestRequest

			} else {
				return {ok:false, error: `Status: ${response.status} in request`}
			}
		}catch(err: unknown){
			if (err instanceof Error) {
				return {ok:false,error:err.message}
			}

			console.error(err)
			return  {ok:false, error:"Error desconocido durante la Generación"}
		}
	}
	
	static async checkResponseQuestion(question:Question, content: string, apiKey:string):  Promise<CheckQuestionRequest | TestRequestError> {
		const formData = new FormData()

		formData.set("question", JSON.stringify(question))
		formData.set("content", content)
		formData.set("apiKey", apiKey)

		try{
			const response = await fetch(process.env.NODE_ENV==="production"?
				`${process.env.NEXT_PUBLIC_URL_API}`:
				`http://${window.location.host}/api/check/question`
				, 
				{
					method: "post",
					body: formData 
				})

			if (response.ok) {
				return {ok: true, ...await response.json() } as CheckQuestionRequest

			} else {
				return {ok:false, error: `Status: ${response.status} in request`}
			}
		}catch(err: unknown){
			if (err instanceof Error) {
				return {ok:false,error:err.message}
			}

			console.error(err)
			return  {ok:false, error:"Error desconocido durante la Generación"}
		}
	}

	static async checkResponseComplete(complete: Complete, content:string, apiKey:string): Promise<CheckCompleteRequest | TestRequestError>{
		const formData = new FormData()

		formData.set("complete", JSON.stringify(complete))
		formData.set("content", content)
		formData.set("apiKey", apiKey)

		try{
			const response = await fetch(process.env.NODE_ENV==="production"?
				`${process.env.NEXT_PUBLIC_URL_API}`:
				`http://${window.location.host}/api/check/complete`
				, 
				{
					method: "post",
					body: formData 
				})

			if (response.ok) {
				return {ok: true, ...await response.json() } as CheckCompleteRequest

			} else {
				return {ok:false, error: `Status: ${response.status} in request`}
			}

		}catch(err: unknown){
			if (err instanceof Error) {
				return {ok:false,error:err.message}
			}

			console.error(err)
			return  {ok:false, error:"Error desconocido durante la Generación"}
		}
	}
}