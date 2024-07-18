import { createOpenAI} from '@ai-sdk/openai';
import { streamText ,convertToCoreMessages} from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, apikey, content } = await req.json();
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: apikey
})
const result = await streamText({
    model: groq("llama3-70b-8192"),
    messages: convertToCoreMessages(messages),
    system: `Eres un asistente que responderá preguntas sobre el contenido encerrado entre etiquetas:
        -Todas tus respuestas tiene que estar basadas únicamente en el texto del contenido
        -Si te preguntan por un tema que no se corresponde con el contenido evita cortez mente responderlo excusando que dicho tema no se encuentra en el contenido
        -Sólo cuando te indiquen explicítamente que quieren ampliar sobre alguno de los temas del contenido, puedes ampliar sobre el tema con tus conocimientos
        <content>${content}<content>    
    `
  });

  return result.toAIStreamResponse();
}