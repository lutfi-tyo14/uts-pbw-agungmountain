import React from "react";
import Brand from "./brand";

const Testimonial = () => {
  return (
    <section className="bg-[#232E26] py-16 text-left px-10 pl-10">
      <div className="max-w-3xl">
        {/* Label kecil atas */}
        <p className="text-sm uppercase text-[#D9EFDE] tracking-widest mb-4 pl-10">
          Testimonial
        </p>

        {/* Isi Testimoni */}
        <blockquote className="text-[#D9EFDE] text-2xl md:text-3xl font-semibold leading-relaxed pl-10">
          "TrailHive has completely changed the way I explore the outdoors. The personalized trail recommendations and virtual challenges have kept me motivated and engaged with my adventures."
        </blockquote>

        {/* Nama */}
        <p className="mt-6 text-xl font-semibold text-[#D9EFDE] pl-10">
          - John R.
        </p>
      </div>

      {/* Logo Partner (lebih besar & memenuhi halaman) */}
      <div className="flex flex-wrap justify-center items-center gap-12 px-10 ">
<Brand brand="DELL"/>
<Brand brand="Zendesk"/>
<Brand brand="Rakuten"/>
<Brand brand="TED"/>
<Brand brand="NCR"/>
<Brand brand="Eiger"/>
<Brand brand="Himalaya"/>
    
      </div>
    </section>
  );
};

export default Testimonial;
