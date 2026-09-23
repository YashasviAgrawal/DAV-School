import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Vision from "@/components/Vision";
import Story from "@/components/Story";
import Schools from "@/components/Schools";
import Journey from "@/components/Journey";
import WhyDav from "@/components/WhyDav";
import Campus from "@/components/Campus";
import Gallery from "@/components/Gallery";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Facts />
        <Vision />
        <Story />
        <Schools />
        <Journey />
        <WhyDav />
        <Campus />
        <Gallery />
        <Admissions />
        <Contact />
        <Enquire />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
