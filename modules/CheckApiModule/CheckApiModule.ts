import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { Complete } from "@/types/contextTypes";
import { completeResponseToIAModelFormatted } from "@/libs/format";
import * as z from 'zod';

export class CheckApiModule {
	static async checkQuestionResponse({ response, content, apikey, question}: { content: string, apikey:string, response:string, question:string }) {
		const schemaPromp = z.object({
			question: z.object({
                checkResponse: z.string(),
                correct: z.boolean()
            })
			
		})

		const groq = createOpenAI({
			baseURL: "https://api.groq.com/openai/v1",
			apiKey: apikey
		})

		const resp = await generateObject({
			model: groq("llama3-70b-8192"),
			schema: schemaPromp,
			mode: "json",
			prompt: `
				Analiza si la respuesta : ${response} ; response a la pregunta ${question}
                teniendo como contexto el texto q se dara mas adelante encerrado entre las etiquetas content;
                a partir de ello genera un objeto que:
                 -En su propiedad correct establezcas true si la respuesta responde correctamente a la pregunta y false si no lo hace
                 -En su propiedad checkResponse des un mensaje de felicitación en caso de q la respuesta sea correcta si no da un breve ejemplo de porq es incorrecta
					
				EL texto es el siguiente: <content>${content}<content>

				`
		})

		return resp
	}

	static async checkCompleteResponse({ content ,apikey , complete}: { content: string, apikey:string, complete: Complete }) {
		const schemaPromp = z.object({
			complete: z.array(z.object({
				checkResponse: z.string(),
                correct: z.boolean()
			}))
			
		})

		const groq = createOpenAI({
			baseURL: "https://api.groq.com/openai/v1",
			apiKey: apikey
		})

		const resp = await generateObject({
			model: groq("llama3-70b-8192"),
			schema: schemaPromp,
			mode: "json",
			prompt: `
				Analiza si las response de cada una de las sentences encerrado entre las etiquetas "sentences" son correctas
                teniendo como contexto lo encerrado entre las etiquetas "content";
                a partir de ello genera una lista de objetos (en el mismo orden que se te presentan las sentences ) que cada uno tendrá:
                 -En su propiedad correct establezcas true si la respuesta responde correctamente a la pregunta y false si no lo hace
                 -En su propiedad checkResponse des un mensaje de felicitación en caso de q la respuesta sea correcta si no da un breve ejemplo de porq es incorrecta
				 -El idioma del valor de la propiedad checkResponse tiene que ser en el mismo idioma que viene en la sentence
				Las sentences son las siguientes: <sentenses> ${completeResponseToIAModelFormatted(complete)}<sentences>	
				EL contexto es el siguiente: <content>${content}<content>
				`
		})

		return resp
	}
}