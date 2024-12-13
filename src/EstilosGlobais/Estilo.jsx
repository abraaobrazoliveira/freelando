import { Global } from "@emotion/react"

const style = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily
        },
        body: {
           margin:0 
        }
    }
}

export const Estilo = () => {
    return (<Global styles={style} />)
}