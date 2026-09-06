import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TeamProfiles from "@/components/TeamProfiles";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <TeamProfiles />
      <Skills />
    </main>
  );
}