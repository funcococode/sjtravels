import CTA from "~/components/cta";
import Destinations from "~/components/destinations";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import HowItWorks from "~/components/how-it-works";
import NavBar from "~/components/navbar";
import Services from "~/components/services";
import Testimonials from "~/components/testimonial";

export default function Welcome() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white antialiased">
      <NavBar />
      <Hero />
      <Services />
      <Destinations />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
