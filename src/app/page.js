import Hero from "@/components/Hero";
import Module from "@/components/Module";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Module />
    </main>
  );
}
