import { IndexTopic } from "./IndexTopic"
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
        <div className="relative z-10 hidden lg:flex flex-col lg:w-72  bg-gray-900 -left-3 h-[500px]  pb-3 rounded-r-[10px]">
            <span className="bg-gray-950 pl-10 text-2xl py-[15px] rounded-tr-[10px]">Temarios</span>
            <ul className="flex flex-col bg-gray-900 pt-5 overflow-y-auto">
                {topics.map((topic)=><IndexTopic key={topic.index} 
                    current={currentIndex === topic.index} 
                    about={topic.about} 
                    goTo={()=>toIndex(topic.index)}/>)}
            </ul>
        </div>
    )
}