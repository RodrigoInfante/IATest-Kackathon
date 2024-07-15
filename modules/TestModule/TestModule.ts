import { TestRequest, TestRequestError } from "@/types/shemaTest"
export class TestModule {
	static async getShemaTest({ file }: { file: File }) :  Promise<TestRequest | TestRequestError> {
		const formData = new FormData()
		formData.set("file", file)
		try{
			const response = await fetch("http://localhost:3000/api/test", {
				method: "post",
				body: formData })
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
}