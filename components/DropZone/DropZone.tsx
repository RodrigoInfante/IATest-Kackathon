"use client"
import { TestModule } from "@/modules/TestModule/TestModule"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { PlaceholderBadRequest } from "../Placeholder/PlaceholderBadRequest"
import { PlaceholderCheck } from "../Placeholder/PlaceholderCheck"
import { PlaceholderDefault } from "../Placeholder/PlaceholderDefault"
import { PlaceholderEnter } from "../Placeholder/PlaceholderEnter"
import { PlaceholderError } from "../Placeholder/PlaceholderError"
import { PlaceholderApiKeyRequire } from "../Placeholder/PlaceholderApiKeyRequire"
import { useRouter } from "next/navigation"
import { ApiKeyInput } from "../Inputs/ApiKeyInput"
import { usePathname } from "next/navigation"
import { useTestContext } from "@/context/TestContext"
import { addPropsClientUi } from "@/libs/format"
export const DropZone = () => {
	const {push}=useRouter()
	const path =usePathname()
	const {setTests, setContent,setApiKey, apikey} = useTestContext()
	const placeholders = {
		default: PlaceholderDefault,
		enter: PlaceholderEnter,
		check: PlaceholderCheck,
		error: PlaceholderError,
		apikeyMissing:PlaceholderApiKeyRequire,
		badRequest: (text: string) => <PlaceholderBadRequest >{text}</PlaceholderBadRequest>
	}
	const [placeholder, setPlaceholder] = useState(placeholders.default)
	
	const onDropAccepted = async (acceptedFiles: File[]) => {
		
		if(apikey === ""){ 
			push(path+"#apikey")
			return setPlaceholder(placeholders.apikeyMissing)
		}
		
		setPlaceholder(placeholders.check)
		const schemaTest = await TestModule.getShemaTest({ file: acceptedFiles[0] ,apikey: apikey})
		const searchParams= new URLSearchParams()
		console.log(schemaTest)
		if (!schemaTest.ok) {
			setPlaceholder(placeholders.badRequest(schemaTest.error))
			acceptedFiles.pop()
		}else{
			setTests(addPropsClientUi(schemaTest.schema.object.tests))
			setContent(schemaTest.content)
			push(`/test?${searchParams.toString()}`)
		}
		
	}
	
	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
		accept: {
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
			'application/msword': ['.doc'],
			'application/pdf': ['.pdf']
		},
		maxFiles: 1,
		maxSize: 3 * (1024 * 1024),
		onDropAccepted,
		onDragEnter: () => {
			setPlaceholder(placeholders.enter)
		},
		onDragLeave: () => setPlaceholder(placeholders.default),
		onDropRejected: () => {
			setPlaceholder(placeholders.error)
			acceptedFiles.pop()

		}

	})
	
	function handlerChange(apiKeyValue:string){
		setApiKey(apiKeyValue)
	}

	return (
		<div className="flex flex-col justify-center gap-1">
			<div {...getRootProps()} className="w-[300px] h-72  orange-shadow hover:bg-gray-900 rounded-[10px] rounded-b-none justify-center items-center">
				<input {...getInputProps()} />
				{placeholder}
			</div>
			<ApiKeyInput id="apikey" value={apikey} handlerChange={handlerChange}/>
		</div>
		
	)
}