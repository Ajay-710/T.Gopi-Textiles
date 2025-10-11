import heroImage from "@/assets/hero-textiles.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-foreground leading-tight">
            Timeless Elegance in
            <span className="block text-gradient-silk mt-2 animate-shimmer bg-[length:200%_auto]">
              Every Thread
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the finest collection of silk sarees, cotton sarees, and dress materials crafted with tradition and love
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-silk text-primary-foreground hover:shadow-dramatic hover:scale-105 transition-bounce text-lg px-10 py-6 rounded-full font-semibold"
              asChild
            >
              <a href="#collections">Explore Collections</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/80 text-foreground bg-background/80 backdrop-blur-sm hover:bg-foreground hover:text-background transition-smooth text-lg px-10 py-6 rounded-full font-semibold"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
