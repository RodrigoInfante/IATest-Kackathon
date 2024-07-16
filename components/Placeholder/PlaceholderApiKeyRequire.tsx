import { Placeholder } from "./Placeholder";
export const PlaceholderApiKeyRequire = ()=>{
    return <Placeholder>
        <span className="text-primary text-center">
            Api Key es necesaria para la generación gratuita
        </span>
        <span className="text-primary text-center underline">Intente luego de introducirla</span>
    </Placeholder>
}