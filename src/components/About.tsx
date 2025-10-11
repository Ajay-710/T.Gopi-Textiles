import { Heart, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Every piece is carefully selected to ensure the highest quality and craftsmanship",
    },
    {
      icon: Award,
      title: "Traditional Excellence",
      description: "Preserving centuries-old weaving traditions and supporting local artisans",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Building lasting relationships through trust, quality, and exceptional service",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            About <span className="gradient-silk bg-clip-text text-transparent">T.Gopi Textiles</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            For generations, we have been dedicated to bringing the finest Indian textiles to our customers, 
            blending traditional craftsmanship with contemporary designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-smooth animate-fade-in shadow-elegant hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-silk mb-6 animate-float">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Card className="bg-card/50 backdrop-blur border-2 border-primary/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-serif font-semibold mb-4 gradient-gold bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To preserve and celebrate the rich heritage of Indian textiles while making them accessible 
                to modern families. We strive to offer authentic, high-quality sarees and dress materials 
                that honor tradition while embracing contemporary style, ensuring every customer finds 
                the perfect piece for their special moments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
