import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import AwardsBand from "@/components/AwardsBand";
import Journey from "@/components/Journey";
import WhyDav from "@/components/WhyDav";
import Campus from "@/components/Campus";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Enquire from "@/components/Enquire";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <TopBar />
      {/* `overlay` floats the bar on the hero photograph until the reader scrolls. */}
      <Navbar overlay />
      {/* Contact stays last so the footer's sweep still begins on a light section. */}
      <main>
        <Hero />
        <Facts />
        <AwardsBand />
        <Journey />
        <WhyDav />
        <Campus />
        <Gallery />
        <Story />
        <Enquire />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
