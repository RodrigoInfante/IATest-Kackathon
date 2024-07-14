"use client"
import { TestModule } from "@/modules/TestModule/TestModule"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { PlaceholderBadRequest } from "../Placeholder/PlaceholderBadRequest"
import { PlaceholderCheck } from "../Placeholder/PlaceholderCheck"
import { PlaceholderDefault } from "../Placeholder/PlaceholderDefault"
import { PlaceholderEnter } from "../Placeholder/PlaceholderEnter"
import { PlaceholderError } from "../Placeholder/PlaceholderError"
import { useRouter } from "next/navigation"
import { TestList } from "@/types/shemaTest"

export const DropZone = () => {
	const {push}=useRouter()
	const placeholders = {
		default: PlaceholderDefault,
		enter: PlaceholderEnter,
		check: PlaceholderCheck,
		error: PlaceholderError,
		badRequest: (text: string) => <PlaceholderBadRequest >{text}</PlaceholderBadRequest>
	}
	const [placeholder, setPlaceholder] = useState(placeholders.default)
	const onDropAccepted = async (acceptedFiles: File[]) => {
		setPlaceholder(placeholders.check)
		const schemaTest = await TestModule.getShemaTest({ file: acceptedFiles[0] })
		const searchParams= new URLSearchParams()
		if (schemaTest.error) {
			setPlaceholder(placeholders.badRequest(schemaTest.error))
			acceptedFiles.pop()
		}else{
			searchParams.set("tests", JSON.stringify(schemaTest.schema?.object?.tests))
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
	return (
		<div {...getRootProps()} className="w-[300px] h-72 border orange-shadow border-gray-400 rounded-[30px] justify-center items-center">
			<input {...getInputProps()} />
			{placeholder}
		</div>
	)
}