import { Mountain } from "lucide-react"
import Button from "./button"
import Menu from "./menu"


export default function Navbar() {
  return (

    <nav className="mx-auto py-4 px-4 flex items-center  justify-between bg-[#D9EFDE] rounded-b-4xl">
      <div className="flex items-center space-x-2 pl-10">
        <Mountain className=" h-5 w-5 text-[#2a3a2a]" />
        <span className=" leading-tight ml-1 font-semibold text-[#2a3a2a]">Agung Mountain</span>
        </div>
<div className="flex justify-center  mx-auto space-x-6 ">
<Menu menu="Home"/>
<Menu menu="Features"/>
<Menu menu="Testimonial"/>
<Menu menu="About us"/>
</div>

<div className="space-x-6 flex pr-10">
<div className="p-4 space-x-6">
      <Button 
        label="Contact Us"
        bgColor="bg-[#D9EFDE]"
        hoverbg="hover:bg-[#2a3a2a]"
        textColor="text-[#2a3a2a]"
        hovertext="hover:text-[#D9EFDE]" 
      />
            <Button 
        label="Download App"
        bgColor="bg-[#2a3a2a]"
        hoverbg="hover:bg-[#D9EFDE]"
        textColor="text-[#D9EFDE]"
        hovertext="hover:text-[#2a3a2a]"
        
      />
    </div>


    </div>
      
      </ nav>
  )
}