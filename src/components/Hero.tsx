import { useState, useEffect } from "react";
import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow2 from "@/assets/slideshow-2.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";
import slideshow4 from "@/assets/slideshow-4.jpg";
import slideshow5 from "@/assets/slideshow-5.jpg";
import slideshow6 from "@/assets/slideshow-6.jpg";
import slideshow7 from "@/assets/slideshow-7.jpg";

const Hero = () => {
  const images = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6, slideshow7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        </div>
      ))}
      
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
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
