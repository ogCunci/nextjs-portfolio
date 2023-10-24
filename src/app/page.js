import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navigation/Navbar";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import EmailSection from "@/components/Email/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 md:px-12 xl:px-20 2xl:px-64 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
