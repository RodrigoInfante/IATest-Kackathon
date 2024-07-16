import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

export type InputProps={
    type: HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
    value: string | number | readonly string [],
    handlerChange?: (value:HTMLInputTypeAttribute)=> void,
    id?: string
}
