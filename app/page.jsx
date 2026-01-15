import Footer from "@/components/footers/Footer1";
import Header from "@/components/headers/Header1";
import Topbar from "@/components/headers/Topbar";
import Blogs from "@/components/common/Blogs";
import About from "@/components/otherPages/HomeAbout";
import Ecatlouge from "@/components/otherPages/InteriorCollections";

import CollactionTop from "@/components/otherPages/CollectionTop";
import Cta from "@/components/otherPages/LetsConnect";
import CtaLfet from "@/components/otherPages/LetsConnectLeft";
import Hero from "@/components/homes/home-1/Hero";
import Products from "@/components/common/Products3";
import FeaturesSection from '@/components/common/FeaturesSection';

export const metadata = {
  title: "Home || MOZAIC-Artistic PVC Laminates",
  description: "MOZAIC-Artistic PVC Laminates",
};

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <CollactionTop />
      <Products />
      <Cta />
      <About />
      <Ecatlouge />
      <FeaturesSection/>
      <CtaLfet />
      <Blogs />
      <Footer />
    </>
  );
}
