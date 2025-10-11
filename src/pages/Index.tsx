import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <OurStory />
        <Collections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
