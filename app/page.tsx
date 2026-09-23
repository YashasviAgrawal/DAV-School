import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwardsBand from "@/components/AwardsBand";
import Journey from "@/components/Journey";
import WhyDav from "@/components/WhyDav";
import Campus from "@/components/Campus";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AwardsBand />
        <Journey />
        <WhyDav />
        <Campus />
        <Gallery />
        <Story />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
