import React from "react";

const Button = ({ label, bgColor, hoverbg, hovertext, textColor }) => {
    return (
        <button
        className={`text-sm ${textColor} border border-[#2a3a2a] rounded-full px-6 py-1  transition-colors ${bgColor} ${hoverbg} ${hovertext} `}
      >
        {label}
      </button>
    )
}

export default Button