import Hero from "../components/home/Hero";
import Companies from "../components/home/Companies";
import Stats from "../components/home/Stats";
import FeaturedJobs from "../components/home/FeaturedJobs";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Stats />
      <FeaturedJobs />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}