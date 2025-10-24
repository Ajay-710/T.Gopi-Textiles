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
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            About <span className="text-gradient-silk">T.Gopi Textiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-silk mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For generations, we have been dedicated to bringing the finest Indian textiles to our customers, 
            blending traditional craftsmanship with contemporary designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="gradient-card border-2 border-border hover:border-primary transition-bounce animate-fade-in-up shadow-elegant hover:shadow-dramatic group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-10 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-silk mb-6 animate-float shadow-elegant group-hover:scale-110 transition-bounce">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card backdrop-blur border-2 border-primary/30 shadow-dramatic overflow-hidden">
            <div className="absolute inset-0 bg-gradient-silk opacity-5"></div>
            <CardContent className="pt-12 pb-10 px-8 relative">
              <h3 className="text-3xl font-serif font-bold mb-6 text-center text-gradient-silk">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
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
