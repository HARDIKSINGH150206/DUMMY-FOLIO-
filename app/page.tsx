import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Team />
    </main>
  );
}