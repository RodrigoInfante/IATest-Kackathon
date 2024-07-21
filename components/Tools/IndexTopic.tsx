type Props={
    goTo: ()=>void,
    about :string,
    current: boolean
}
export const IndexTopic = ({goTo,about,current}:Props)=>{
    return(
        <div onClick={goTo} className={`border-b bg-gray-900 cursor-pointer border-gray-950 pl-10 pb-2 pt-3 hover:bg-gray-950 " ${current &&  "bg-gray-950"}`}>
            {about}
        </div>
    )
}