import { IndexTopic } from "./IndexTopic"
import { HeaderTool } from "./HeaderTool"
type Props={
    topics: {
        index: number,
        about :string
    }[],
    toIndex: (index:number)=> void,
    currentIndex: number
}
export const Tools = ({topics,toIndex, currentIndex}:Props)=>{
    return(
        <div className="relative z-10 hidden lg:flex flex-col w-full max-w-[20%]  bg-gray-900 -left-3 h-[500px]  pb-3 ">
            <HeaderTool>Temarios</HeaderTool>
            <ul className="flex flex-col bg-gray-900 pt-5 overflow-y-auto scrollbar-custom">
                {topics.map((topic)=>(
                    <IndexTopic key={topic.index} 
                        current={currentIndex === topic.index} 
                        about={topic.about} 
                        goTo={()=>toIndex(topic.index)}/>
                    )
                )}
            </ul>
        </div>
    )
}