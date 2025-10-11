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
    <section id="story" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Our <span className="gradient-silk bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of passion, tradition, and unwavering commitment to quality
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src={heritageImage} 
                alt="T.Gopi Textiles Heritage" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-fade-in space-y-6">
              <h3 className="text-3xl font-serif font-semibold gradient-gold bg-clip-text text-transparent">
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
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-serif font-bold gradient-silk bg-clip-text text-transparent mb-3">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
