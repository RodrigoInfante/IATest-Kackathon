import { TestList } from "@/types/shemaTest"
export class TestModule {
	static async getShemaTest({ file }: { file: File }) {
		const formData = new FormData()
		formData.set("file", file)
		let shemaResponse: { schema: {
			object:{
				tests: TestList
			}
		} } | { error: string } = {error: "Unknow error"}
		await fetch("http://localhost:3000/api/test", {
			method: "post",
			body: formData
		}).then(async (response) => {
			if (response.ok) {
				shemaResponse = await response.json()
			} else {
				throw new Error(`Status: ${response.status} in request`)
			}
		}).catch((err) => {
			if (err instanceof Error) {
				shemaResponse= {error:err.message}
			}
			console.error(err)
			shemaResponse = shemaResponse= {error:"Error desconocido durante la Generación"}
		})
		return shemaResponse as { schema: {
			object:{
				tests: TestList
			}
		} } | { error: string }
	}
}