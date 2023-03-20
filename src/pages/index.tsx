import HeroSection from "@/components/hero-section/HeroSection";
import NavBar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="pr-32 pl-32">
      <NavBar />
      <HeroSection />
    </div>
  );
}
