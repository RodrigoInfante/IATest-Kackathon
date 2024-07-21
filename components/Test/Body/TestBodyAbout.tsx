export function TestBodyAbout({children}:{children:string}) {
    return(
        <p className="text-lg font-medium ">Sobre ( <span className="text-red-400">{children}</span>  ) :</p>
    )
}