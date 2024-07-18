type Props ={
    children:string
}
export const HeaderTool =({children}:Props)=>{
    return (
        <span className="pl-10 text-2xl py-[15px]">{children}</span>
    )
}