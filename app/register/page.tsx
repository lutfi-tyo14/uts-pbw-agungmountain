"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import { Mountain } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        alert(
          "Registration successful! Please check your email for verification."
        );
        router.push("/login");
      }
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during registration."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#D9EFDE]">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-[#232E26] p-6 shadow-md">
        <div>
        <div className="text-left font-bold flex items-center space-x-2 mb-3 justify-center">
        <Mountain className=" h-5 w-5 text-[#D9EFDE] " />
        <span className="text-[#D9EFDE]">Agung Mountain </span>
        </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#D9EFDE]">
            Daftar Akun Baru
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-[#D9EFDE] p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-[#D9EFDE] placeholder-[#D9EFDE] text-[#D9EFDE] rounded-t-md focus:outline-none focus:ring-[#9bc1a4] focus:border-[#bde3c6] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-[#D9EFDE] placeholder-[#D9EFDE] text-[#D9EFDE] rounded-t-md focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#232E26] bg-[#D9EFDE] hover:bg-[#bde3c6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9bc1a4]"
            >
              {loading ? "Mendaftar..." : "Daftar"}
            </button>
          </div>

          <div className="text-center text-sm text-[#D9EFDE]">
            Sudah Memiliki Akun?   {" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
               Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}