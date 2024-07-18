import { Sheet } from "./Sheet"
import { Frame } from "./Frame"
type Props ={
    content: string
}
export const Document = ({content}:Props)=>{
    return (
        <Frame>
            <Sheet content={content}></Sheet>
        </Frame>
    )
}