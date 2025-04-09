import React from "react";

const Gambar = ({ imageUrl, description,title, imageAlt }) => {
  return (
<div className="bg-transparent p-4 rounded-xl w-80 text-auto">
      {/* Gambar */}
      <img
        src={imageUrl}
        alt={imageAlt || "Image"}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />

      {/* Judul */}
      <h3 className="text-lg font-semibold text-[#2a3a2a] mb-2">
        {title}
      </h3>

      {/* Deskripsi */}
      <p className="text-[#2a3a2a] text-sm ">
        {description}
      </p>
    </div>
  );
}

export default Gambar;
