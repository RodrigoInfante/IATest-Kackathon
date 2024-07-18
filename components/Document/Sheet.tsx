type Props ={
    content: string
}
export const Sheet =({content}:Props)=>{
    return (
        <div className="bg-white text-black py-10 px-2 ">
             <p
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    )
}