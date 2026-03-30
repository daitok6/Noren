import Hero from "@/components/Hero";
import IndustryGallery from "@/components/IndustryGallery";
import WhyNoren from "@/components/WhyNoren";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <IndustryGallery />
      <WhyNoren />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
