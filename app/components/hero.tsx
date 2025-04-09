import Link from "next/link"
import Image from "next/image"
import Button from "./button"
import Judul from "./judul"
import Paragraf from "./paragraf"

export default function Hero() {
  return (
    <section className="bg-[#232E26] pl-10 pr-10 container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 ">
<div className="pt-6 pb-6">
<Judul
judul="Welcome to the Fake Website of Mount Agung, Hope You Enjoy It"
fontSize="text-5xl"
fontStyle="font-bold"
textcolor="text-[#D9EFDE]"
></Judul>
</div>

<Paragraf 
paragraf="Are you tired of spending hours searching for the perfect hiking trail? Agung Mountain - the ultimate outdoor adventure app that connects you with the best trails in your area.
"
fontSize="text-1"
fontStyle="font-extra-light"
textcolor="text-[#D9EFDE]">
</Paragraf>


        <div className="pt-15 ">

      <Button 
        label="Contact Us"
        bgColor="bg-[#D9EFDE]"
        hoverbg="hover:bg-[#2a3a2a]"
        textColor="text-[#2a3a2a]"
        hovertext="hover:text-[#D9EFDE]"
        
      />
    </div>
      </div>
      <div className="md:w-1/2 pr-10 pl-10">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/img-home.jpeg"
            alt="Hiker on a mountain trail with beautiful scenery"
            width={500}
            height={700}
            className="w-200 h-125 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

