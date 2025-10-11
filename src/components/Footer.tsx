import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Story", href: "#story" },
    { name: "Collections", href: "#collections" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-gradient-silk mb-4">
              T.Gopi Textiles
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Preserving the art of traditional Indian textiles with passion and dedication. 
              Your trusted source for authentic sarees and dress materials.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-smooth text-lg inline-block hover:translate-x-2 duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Store Hours</h4>
            <div className="space-y-3 text-muted-foreground text-lg">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Monday - Saturday: 10:00 AM - 8:00 PM
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Sunday: 10:00 AM - 6:00 PM
              </p>
              <p className="mt-6 text-sm leading-relaxed border-l-4 border-primary/30 pl-4">
                Visit us in-store for personalized assistance and to see our complete collection
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap text-lg">
            © {currentYear} T.Gopi Textiles. Crafted with
            <Heart className="w-5 h-5 text-primary fill-primary animate-float" />
            for textile lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
