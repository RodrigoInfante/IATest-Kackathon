import { AIApiModule } from "@/modules/AIApiModule/AIApiModule";
import { extractRawText } from "mammoth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

	try {
		const formData = await req.formData();
		const file = formData.get("file") as File;
		const apikey =formData.get("apikey") as string
		if (!file || !apikey) {
			throw new Error("No file or apikey provided");
		}
		console.log(apikey)
		const arrayBuffer = await file.arrayBuffer();
		const data = await extractRawText({ buffer: arrayBuffer as Buffer })

		const schema = await AIApiModule.generateTestSchema({ text: data.value, apikey })
		return NextResponse.json({
			schema: schema
		});
		
		
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}
