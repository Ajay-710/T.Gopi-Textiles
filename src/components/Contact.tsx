import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tgopitextiles.com", "contact@tgopitextiles.com"],
      action: "mailto:info@tgopitextiles.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["T.Gopi Textiles", "Main Market, Your City"],
      action: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/919876543210", color: "hover:text-green-500" },
    { icon: Facebook, label: "Facebook", url: "https://facebook.com", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com", color: "hover:text-red-600" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Get In <span className="text-gradient-silk">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-silk mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visit our store or reach out to us. We're here to help you find the perfect textile
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="gradient-card border-2 border-border hover:border-primary transition-bounce animate-fade-in-up shadow-elegant hover:shadow-dramatic group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-10 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-silk mb-6 shadow-elegant group-hover:scale-110 transition-bounce">
                    <info.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-5 text-foreground">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-lg">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    className="gradient-gold text-foreground hover:shadow-elegant hover:scale-105 transition-bounce font-semibold px-6 rounded-full"
                    asChild
                  >
                    <a href={info.action} target="_blank" rel="noopener noreferrer">
                      Connect Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="gradient-card backdrop-blur border-2 border-primary/30 shadow-dramatic animate-fade-in-up overflow-hidden">
            <div className="absolute inset-0 bg-gradient-silk opacity-5"></div>
            <CardContent className="pt-12 pb-10 px-6 relative">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center text-gradient-gold">
                Connect With Us On Social Media
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`border-2 transition-bounce hover:scale-110 ${social.color} rounded-full px-6 font-semibold shadow-soft hover:shadow-elegant`}
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="gradient-silk text-primary-foreground hover:shadow-dramatic hover:scale-105 transition-bounce rounded-full px-8 py-6 font-semibold text-lg"
                  asChild
                >
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-6 h-6 mr-2" />
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
