import heroImage from "@/assets/hero-textiles.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
          Timeless Elegance in
          <span className="block gradient-silk bg-clip-text text-transparent">
            Every Thread
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Discover the finest collection of silk sarees, cotton sarees, and dress materials crafted with tradition and love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="gradient-silk text-primary-foreground hover:opacity-90 transition-smooth text-lg px-8"
            asChild
          >
            <a href="#collections">Explore Collections</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
