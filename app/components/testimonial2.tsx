import React from "react";
import Button from "./button";

const Testimonial2 = () => {
  return (
    <section className="relative py-24 px-10  overflow-hidden">
      {/* Background Layer dengan opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gambar1.jpg')",
          opacity: 0.2,
          zIndex: 1,
        }}
      ></div>

      {/* Text Content di atas background */}
      <div className="relative z-10 max-w-3xl">
        {/* Label kecil atas */}
        <p className="text-sm uppercase text-[#D9EFDE] tracking-widest mb-4 pl-10">
          Testimonial
        </p>

        {/* Isi Testimoni */}
        <blockquote className="text-[#D9EFDE] text-2xl md:text-3xl font-semibold leading-relaxed pl-10">
        "I love the social networking aspect of TrailHive. It's great to connect with other hikers and bikers and plan group events together."
                </blockquote>

        {/* Nama */}
        <p className="mt-6 text-xl font-semibold text-[#D9EFDE] pl-10">
          - Sara L.
        </p>

        <div className="pt-15 px-10 ">
<Button 
        label="Learn More"
        bgColor="bg-[#D9EFDE]"
        hoverbg="hover:bg-[#2a3a2a]"
        textColor="text-[#2a3a2a]"
        hovertext="hover:text-[#D9EFDE]" 
      />
</div>

      </div>


    </section>
  );
};

export default Testimonial2;
