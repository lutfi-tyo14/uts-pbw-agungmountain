import React from "react";

const Judul = ({ judul,fontSize, fontStyle,textcolor }) => {
    return (
   <h1 className={` ${textcolor}  ${fontSize} ${fontStyle}`}>
    {judul}
    </h1>

    )
}

export default Judul