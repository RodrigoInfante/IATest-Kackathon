import { AIApiModule } from "@/modules/AIApiModule/AIApiModule";
import { extractRawText } from "mammoth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

	try {
		const formData = await req.formData();
		const file = formData.get("file") as File;
		if (!file) {
			throw new Error("No file provided");
		}

		const arrayBuffer = await file.arrayBuffer();
		const data = await extractRawText({ buffer: arrayBuffer as Buffer })
		console.log(data)
		const schema = await AIApiModule.generateTestSchema({ text: data.value })
		return NextResponse.json({
			schema: schema
		});
		
		
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}
