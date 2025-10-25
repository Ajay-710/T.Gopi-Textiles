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
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow background with sliding animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ 
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0"
            >
              <img 
                src={image} 
                alt={`Slideshow ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-white leading-tight drop-shadow-lg">
            Timeless Elegance in
            <span className="block text-gradient-silk mt-2 animate-shimmer bg-[length:200%_auto]">
              Every Thread
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Discover the finest collection of silk sarees, cotton sarees, and dress materials crafted with tradition and love
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
