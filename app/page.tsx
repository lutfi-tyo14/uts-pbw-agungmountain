import Image from "next/image";
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Feature from "./components/features";
import Testimonial from "./components/testimonial";
import Explore from "./components/blog";
import Testimonial2 from "./components/testimonial2";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-[#232E26] min-h-screen scroll-smooth">
    <Navbar />
   <Hero />
   <Feature />
    <Testimonial />
    <Explore />
<Testimonial2 />
<Footer />
    </main>
  );
}
