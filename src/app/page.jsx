"use client"
import Section1 from "@/components/section 1";
import Section2 from "@/components/section 2";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="">
      <section>
        <Section1/>
        <Section2/>
      </section>
    </main>
  );
}
