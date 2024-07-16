import { PrimaryLink } from "./PrimaryLink";
type Props ={
    className?:string
}
export const LinkGitHub =({className}:Props)=>{
    return(
        <PrimaryLink className={className} href={"https://github.com/RodrigoInfante/IATest-Kackathon"} > 
            GitHub
        </PrimaryLink>
    )
}