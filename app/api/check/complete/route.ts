import { AIApiModule } from "@/modules/AIApiModule/AIApiModule";
import { Complete } from "@/types/contextTypes";
import { extractRawText } from "mammoth";
import { NextRequest, NextResponse } from "next/server";
import { CheckApiModule } from "@/modules/CheckApiModule/CheckApiModule";

export async function POST(req: NextRequest) {

	try {
		const formData = await req.formData();
        
		const complete = JSON.parse(formData.get("complete") as string) as Complete;
		const content =formData.get("content") as string
		const apikey =formData.get("apiKey") as string

        
		if (!complete || !content || !apikey) {
			throw new Error("No question or content provided");
		}
		

		const schema = await CheckApiModule.checkCompleteResponse({apikey, content, complete})
		return NextResponse.json({
			schema: schema
		});
		
		
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}