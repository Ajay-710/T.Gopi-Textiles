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
    <section id="collections" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Our <span className="gradient-silk bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated selection of traditional and contemporary textiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:border-primary transition-smooth group animate-fade-in shadow-elegant hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-serif font-bold mb-3 gradient-gold bg-clip-text text-transparent">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <Sparkles className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>
                <Button 
                  className="w-full gradient-silk text-primary-foreground hover:opacity-90 transition-smooth"
                  asChild
                >
                  <a href="#contact">Inquire Now</a>
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
