type Props = {
    color?: 'black' | 'white'
}

export const Loader =({color = 'white'}: Props)=>{

    return(
        <div
            className={`w-10 h-10 rounded-full border-t border-l border-r border-${color} animate-spin`}
        ></div>
    )
}