import heritageImage from "@/assets/heritage-story.jpg";
import { Card, CardContent } from "@/components/ui/card";

const OurStory = () => {
  const timeline = [
    {
      year: "1980",
      title: "The Beginning",
      description: "T.Gopi founded our first textile shop with a vision to bring quality fabrics to the community.",
    },
    {
      year: "1995",
      title: "Expansion",
      description: "Expanded our collection to include premium silk sarees from across India, gaining recognition for quality.",
    },
    {
      year: "2010",
      title: "Next Generation",
      description: "The family legacy continued as the next generation joined, bringing fresh ideas while honoring traditions.",
    },
    {
      year: "2025",
      title: "Digital Presence",
      description: "Embracing technology to reach more customers while maintaining our commitment to authentic textiles.",
    },
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Our <span className="text-gradient-silk">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-silk mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of passion, tradition, and unwavering commitment to quality
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-silk opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-smooth"></div>
                <img 
                  src={heritageImage} 
                  alt="T.Gopi Textiles Heritage" 
                  className="relative rounded-2xl shadow-dramatic w-full h-auto border-4 border-background group-hover:scale-[1.02] transition-bounce"
                />
              </div>
            </div>
            <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-serif font-bold text-gradient-gold">
                A Legacy Woven with Care
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                What started as a small textile shop has grown into a beloved destination for those seeking 
                authentic Indian textiles. Through decades of dedication, we've built relationships with the 
                finest weavers and artisans across India, ensuring every piece tells a story of tradition 
                and craftsmanship.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our journey is one of continuous learning, adapting to changing times while staying true 
                to our core values of quality, authenticity, and customer satisfaction.
              </p>
              <div className="pt-4">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/30">
                  <span className="text-primary font-semibold">45+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                className="gradient-card border-2 border-border hover:border-primary transition-bounce animate-fade-in-up shadow-elegant hover:shadow-dramatic group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-serif font-bold text-gradient-silk mb-4 group-hover:scale-110 transition-bounce">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
