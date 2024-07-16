import { TestRequest, TestRequestError } from "@/types/shemaTest"
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
}