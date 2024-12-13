import { css, Global } from "@emotion/react"

const style = css`
 * {
    font-family: "Montserrat", sans-serif;
   }
` 

export const Estilo = () => {
    return (<Global styles={style} />)
}