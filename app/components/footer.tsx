import { Mountain } from "lucide-react"
import React from "react";
import Button from "./button";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C2A21] text-[#D9EFDE] py-16 px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            
              <Mountain className="h-6 w-6 fill-[#D9EFDE]"></Mountain>

            Agung Mountain
          </h2>
        </div>

        {/* App Links */}
        <div>
          <h3 className="font-semibold mb-2">App</h3>
          <ul className="space-y-1 text-sm">
            <li>Features</li>
            <li>Benefits</li>
            <li>Pricing</li>
            <li>Explore</li>
            <li>Trails</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Support</li>
            <li>Members</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-[#D9EFDE] text-sm w-full placeholder-[#D9EFDE] focus:outline-none pb-1"
            />
<Button
label="Subscribe"
        bgColor="bg-[#D9EFDE]"
        hoverbg="hover:bg-[#2a3a2a]"
        textColor="text-[#2a3a2a]"
        hovertext="hover:text-[#D9EFDE]" >
</Button>
            <p className="text-xs mt-1">
              By subscribing you agree to with our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Garis pembatas */}
      <hr className="my-10 border-[#D9EFDE]/30" />

      {/* Bawah */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left */}
        <div className="text-[#D9EFDE]/80">
          © 2025 AgungMountain. All rights reserved.
        </div>

        {/* Center links */}
        <div className="flex space-x-6">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Cookies Settings
          </a>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 text-[#D9EFDE] text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
