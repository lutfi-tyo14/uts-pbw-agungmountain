import { Mountain } from "lucide-react";

const Auth = () => {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#a7e2b5]">
    
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
    <div className="bg-[#D9EFDE] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div className="w-3/5 p-6 bg-[#D9EFDE] rounded-2xl">
      <div className=" text-left font-bold flex items-center space-x-2">
      <Mountain className=" h-5 w-5 text-[#2a3a2a] " />
        <span className="text-[#232E26]">Agung </span>Mountain
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold text-[#232E26] mb-2">
          Login
          </h2>
      </div>

      <div className="flex flex-col items-center ">

        <div className=""/> 
        <a 
        href="/login" 
        className="border-2 border-[#232E26] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#232E26] hover:text-[#D9EFDE] text-[#232E26]">
          Login 
        </a>
      </div>  
      </div>

      <div className="w-2/5 p-5 bg-[#232E26] rounded-tr-2xl rounded-br-2xl py-6 px-12">
      <h2 className="text-3xl font-bold mb-2 text-[#D9EFDE]">Daftar</h2>
      <div className="border-2 w-10 border-[#D9EFDE] inline-block mb-2"></div>
      <p className="text-[#D9EFDE] mb-10">Jika belum memiliki akun silahkan daftar dulu yaa!</p>
      <a href="/register" className="border-2 border-[#D9EFDE] rounded-full px-12 py-2 inline-block font-semibold text-[#D9EFDE] hover:bg-[#D9EFDE] hover:text-black">Daftar</a>
      </div>
    
    </div>
    </main>
    </div>


      );
    }


   export default Auth