import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Cta from "../../components/sections/Cta";
import EstateFlow from "../../components/sections/EstateFlow";
import Hero from "../../components/sections/Hero";
import Neighborhoods from "../../components/sections/Neighborhoods";
import SocialProof from "../../components/sections/SocialProof";
import Testimonial from "../../components/sections/Testimonial";

const Home = () => {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />
      <Hero />
      <SocialProof />
      <EstateFlow />
      <Neighborhoods />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
