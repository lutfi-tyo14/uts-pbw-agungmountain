import React from "react";

const Paragraf = ({ paragraf, fontSize, fontStyle, textcolor }) => {
    return (
   <h1 className={` ${textcolor}  ${fontSize} ${fontStyle}`}>
    {paragraf}
    </h1>

    )
}

export default Paragraf