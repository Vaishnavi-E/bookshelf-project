import { Book, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-6 w-6 text-success" />
              <span className="text-lg font-display font-bold">BookShelf</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your complete book management solution. Organize, track, and discover your reading journey.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/books", label: "Books" },
                { to: "/about", label: "About" },
                { to: "/login", label: "Login" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 hover:text-success transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-success" />
                info@bookshelf.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-success" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-success" />
                123 Library St, Book City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} BookShelf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
