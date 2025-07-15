import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="Components">
          <Hero />
          <About />
          <Services />
          <Features />
          <Pricing />
          <Faq />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
