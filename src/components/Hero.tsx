const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
            Timeless Elegance in
            <span className="block text-gradient-silk mt-2 animate-shimmer bg-[length:200%_auto]">
              Every Thread
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
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
