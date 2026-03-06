"use client";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Header />
      <main className="h-full">
        <Hero />
      </main>
    </div>
  );
}
