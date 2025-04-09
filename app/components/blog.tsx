import React from "react";

const Explore = () => {
  return (
    <section className="bg-[#D9EFDE] py-12 rounded-4xl">
      {/* Judul */}
      <div className="text-center px-10 mb-8">
        <h2 className="text-4xl md:text-4xl font-semibold text-gray-800">
          Find new trails to explore and <br />
          adventures to embark on.
        </h2>
      </div>

      {/* Gambar */}
      <div className="px-10 pt-10">
        <img
          src="img-blog.jpg" 
          alt="Hiking adventure"
          className="rounded-4xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Explore;
