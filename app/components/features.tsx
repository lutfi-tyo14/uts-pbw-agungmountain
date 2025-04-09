import Link from "next/link"
import Image from "next/image"
import Button from "./button"
import Judul from "./judul"
import Paragraf from "./paragraf"
import Gambar from "./gambar"


export default function Hero() {
  return (
    <section className="bg-[#D9EFDE] pl-10 pr-10 container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center rounded-4xl">
      <div className="pl-10 flex flex-col justify-between flex-1">
<div className="pb-10">
<Judul 
judul="Features"
fontSize="text-2xl"
fontStyle="font-light"
textcolor="text-[#232E26]"
></Judul>
</div>

<div className="pt-1">
<Paragraf 
paragraf="Stay Active"
fontSize="text-4xl"
fontStyle="font-bold"
textcolor="text-[#232E26]">

</Paragraf>
<Paragraf 
paragraf="& Healty"
fontSize="text-4xl"
fontStyle="font-bold"
textcolor="text-[#232E26]">
</Paragraf>
</div>


        <div className="pt-10">

      <Button 
        label="Download App"
        bgColor="bg-[#2a3a2a]"
        hoverbg="hover:bg-[#D9EFDE]"
        textColor="text-[#D9EFDE]"
        hovertext="hover:text-[#2a3a2a]"
        
      />
    </div>
      </div>

<Gambar
  imageUrl="/img-features1.jpg"
  title="Access nature"
  description="With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings."
  imageAlt="Nature Trail">
</Gambar>
<Gambar
  imageUrl="/img-features2.jpg"
  title="Search in real-time"
  description="Our real-time trail updates, weather forecasts, and safety alerts will ensure that you have a safe and enjoyable experience every time."
  imageAlt="Nature Trail">
</Gambar>
<Gambar
  imageUrl="/img-features3.jpg"
  title="Make Conections"
  description="But TrailHive is more than just a trail-finding app - it's a social networking platform for outdoor enthusiasts. "
  imageAlt="Nature Trail">
</Gambar>






    </section>
  )
}

