import type { PropsWithChildren } from "react";
import { useState } from "react"

interface ButtonProps extends PropsWithChildren {
    title?: string;
    open?: boolean;
}

function Accordion({ title, children, open }: ButtonProps) {
    const [visivel, setVisivel] = useState(open ?? false);
    if (open) {
        return (
            <>
                <div>
                    <h6>
                        <button type="button"
                            onClick={() => setVisivel(!visivel)}>
                            {title} {visivel === true ? "▲" : "▼"}
                        </button>
                    </h6>
                    {visivel && <div>{children}</div>}
                </div>
            </>
        );
    }
    return (
        <>
            <div>
                <h6>
                    <button type="button"
                        onClick={() => setVisivel(!visivel)}>
                        {title} {visivel === true ? "▲" : "▼"}
                    </button>
                </h6>
                {visivel && <div>{children}</div>}
            </div>
        </>
    );
}

export default Accordion;