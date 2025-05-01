
import Navbar from "@/app/components/navbar"
import Hero from "@/app/components/hero"
import Feature from "@/app/components/features";
import Testimonial from "@/app/components/testimonial";
import Explore from "@/app/components/blog";
import Testimonial2 from "@/app/components/testimonial2";
import Footer from "@/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Mountain } from "lucide-react";

export default function Home() {
  return (
<main className="bg-[#232E26] min-h-screen scroll-smooth">
    <Navbar />
   <Hero />
   <Feature />
    <Testimonial />
    <Explore />
<Testimonial2 />
<Footer/>
</main>

      );
    }


   