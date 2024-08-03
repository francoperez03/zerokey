import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex   m-auto flex-col items-center justify-between ">
      <Hero/>
    </main>
  );
}
