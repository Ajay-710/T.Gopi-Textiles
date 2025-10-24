import silkSareesImage from "@/assets/silk-sarees.jpg";
import cottonSareesImage from "@/assets/cotton-sarees.jpg";
import dressMaterialsImage from "@/assets/dress-materials.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      title: "Silk Sarees",
      image: silkSareesImage,
      description: "Exquisite silk sarees with intricate zari work, perfect for weddings and special occasions. Each piece is a masterpiece of traditional craftsmanship.",
      features: ["Pure Silk", "Zari Work", "Traditional Designs"],
    },
    {
      title: "Cotton Sarees",
      image: cottonSareesImage,
      description: "Comfortable and elegant cotton sarees for everyday wear. Featuring beautiful prints and handloom designs that combine comfort with style.",
      features: ["Pure Cotton", "Handloom", "Daily Wear"],
    },
    {
      title: "Dress Materials",
      image: dressMaterialsImage,
      description: "Premium quality dress materials and fabrics in vibrant colors and patterns. Perfect for creating your dream outfit with personalized tailoring.",
      features: ["Premium Fabrics", "Latest Patterns", "Custom Options"],
    },
  ];

  return (
    <section id="collections" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Our <span className="text-gradient-silk">Collections</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-silk mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of traditional and contemporary textiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 border-border hover:border-primary transition-bounce group animate-fade-in-up shadow-elegant hover:shadow-dramatic"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-40 group-hover:opacity-80 transition-smooth"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-smooth">
                  <h3 className="text-3xl font-serif font-bold text-white drop-shadow-lg text-gradient-gold">
                    {collection.title}
                  </h3>
                </div>
              </div>
              <CardContent className="pt-6 pb-8 px-6 gradient-card">
                <p className="text-muted-foreground mb-5 leading-relaxed">{collection.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {collection.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {feature}
                    </span>
                  ))}
                </div>
                <Button 
                  className="w-full gradient-silk text-primary-foreground hover:shadow-dramatic hover:scale-105 transition-bounce rounded-full font-semibold py-6"
                  asChild
                >
                  <a href="#contact">Enquire Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
