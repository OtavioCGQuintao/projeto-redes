import type { PropsWithChildren } from "react";
import { useState } from "react"

interface ButtonProps extends PropsWithChildren{
    titulo?: string;
}

function Accordion({titulo, children} : ButtonProps){
    const [visivel, setVisivel] = useState(true);
    return(
        <>
        <div>
        <h6>
        <button type="button" 
        onClick={() => setVisivel(!visivel)}>
        {titulo} {visivel === true ? "▲" : "▼"}
        </button>
        </h6>
        {visivel && <div>{children}</div>}
        </div>
        </>
    );
}

export default Accordion;