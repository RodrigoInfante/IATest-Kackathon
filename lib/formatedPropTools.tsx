import type { TestWithSelect } from "@/types/contextTypes";
import { ToolType } from "@/types/ToolType";
export function formatedPropTools(tests: TestWithSelect[]): ToolType{

    return tests.map((test, index)=> {
        return {
            about: test.about,
            index
        }
    })
}