import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import * as z from 'zod';
export class AIApiModule {
	static async generateTestSchema({ text ,apikey}: { text: string, apikey:string }) {
		const schemaPromp = z.object({
			tests: z.array(
				z.object({
					about: z.string(),
					choises: z.array(z.object({
						text: z.string(),
						correct: z.boolean()
					})),
					question: z.string(),
					macth: z.array(z.object({
						columnA: z.string(),
						columnB: z.string()
					})),
					complete: z.array(z.string())
				})
			)
		})
		const groq = createOpenAI({
			baseURL: "https://api.groq.com/openai/v1",
			apiKey: apikey
		})
		const response = await generateObject({
			model: groq("llama3-70b-8192"),
			schema: schemaPromp,
			mode: "json",
			prompt: `
				Genera un una lista de test a partir de todo el texto que se te proporcionara encerrado entre las etiquetas <content><content>,
				De cada tema del q trate dicho texto crearas un test, con su respectivo about en el pondras de q se trata,
		 			*En choises seran las opciones para seleccionar basadas en el tema del que se trate: 
						-Cada opcion puede ser verdadera o falsa como minimo 4 elecciones y maximo 7,
						-Siempre tiene q haber al menos una opcion verdadera en cada tema
					*En question elaborarás una pregunta sobre el tema 
					*En macth crearas un array de objetos:
						-Dichos objetos tienen una propiedad columnA en la cual se pondrá una oración o sentencia que tiene q estar relacionada con la q se encuentre en la propiedad columnB de ese mismo objeto
						-No se pueden estar relacionadas propiedades de objetos distintos
						-Al menos 4 objetos
					*En complete sera un array de oraciones:
						-Cada oración tendrá una palabra q se sustituirá por las etiquetas <complete><complete>
						-Con el objetivo q el usuario pueda completar dicha oracion    
						-Al menos 5 oraciones
					
				EL texto es el siguiente: <content>${text}<content>

				`
		})
		return response
	}
}