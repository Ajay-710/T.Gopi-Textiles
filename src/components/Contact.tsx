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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Get In <span className="gradient-silk bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit our store or reach out to us. We're here to help you find the perfect textile
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-smooth animate-fade-in shadow-elegant hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-silk mb-6">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    className="mt-4 gradient-gold text-foreground hover:opacity-90 transition-smooth"
                    asChild
                  >
                    <a href={info.action} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/80 backdrop-blur border-2 border-primary/20 animate-fade-in">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center gradient-gold bg-clip-text text-transparent">
                Connect With Us On Social Media
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`border-2 transition-smooth ${social.color}`}
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="gradient-silk text-primary-foreground hover:opacity-90 transition-smooth"
                  asChild
                >
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5 mr-2" />
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
