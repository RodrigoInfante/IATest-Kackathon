import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import * as z from 'zod';
export class AIApiModule {
	static async generateTestSchema({ text }: { text: string }) {
		const schemaPromp = z.object({
			tests: z.array(
				z.object({
					about: z.string(),
					choises: z.array(z.object({
						text: z.string(),
						correct: z.boolean()
					}))
				})
			)
		})
		const groq = createOpenAI({
			baseURL: "https://api.groq.com/openai/v1",
			apiKey: process.env.GROQ_API_KEY
		})
		const response = await generateObject({
			model: groq("mixtral-8x7b-32768"),
			schema: schemaPromp,
			mode: "json",
			prompt: `
				Genera un una lista de test a partir de todo el texto q te proporcionare,
				De cada tema del q trate dicho texto crearas un test, con su respectivo about en el pondras de q se trata,
		 		En choises seran las opciones para seleccionar basadas en el tema del que se trate, 
				Cada opcion puede ser verdadera o falsa como minimo 4 elecciones y maximo 7,
				Siempre tiene q haber al menos una opcion verdadera en cada tema

				EL texto es el siguiente: ${text}

				`
		})
		return response
	}
}