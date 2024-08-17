import { AIApiModule } from "@/modules/AIApiModule/AIApiModule";
import { Question } from "@/types/contextTypes";
import { extractRawText } from "mammoth";
import { NextRequest, NextResponse } from "next/server";
import { CheckApiModule } from "@/modules/CheckApiModule/CheckApiModule";
export async function POST(req: NextRequest) {

	try {
		const formData = await req.formData();
		const question = JSON.parse(formData.get("question") as string) as Question;
		const content =formData.get("content") as string
		const apikey =formData.get("apiKey") as string

        
		if (!question || !content || !apikey) {
			throw new Error("No question or content provided");
		}
		

		const schema = await CheckApiModule.checkQuestionResponse({apikey,content,question: question.sentence, response: question.response})
		return NextResponse.json({
			schema: schema
		});
		
		
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}