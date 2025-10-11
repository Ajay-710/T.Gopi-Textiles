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
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold gradient-silk bg-clip-text text-transparent mb-4">
              T.Gopi Textiles
            </h3>
            <p className="text-muted-foreground">
              Preserving the art of traditional Indian textiles with passion and dedication. 
              Your trusted source for authentic sarees and dress materials.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Store Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
              <p className="mt-4 text-sm">
                Visit us in-store for personalized assistance and to see our complete collection
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} T.Gopi Textiles. Crafted with
            <Heart className="w-4 h-4 text-primary fill-primary animate-float" />
            for textile lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
