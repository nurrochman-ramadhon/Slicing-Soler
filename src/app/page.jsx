"use client"
import Section1 from "@/components/section 1";
import Section2 from "@/components/section 2";
import Section3 from "@/components/section 3";
import Section4 from "@/components/section 4";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="">
      <section>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </section>
    </main>
  );
}
