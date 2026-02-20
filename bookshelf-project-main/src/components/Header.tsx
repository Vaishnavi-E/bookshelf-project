import { Book, LogIn, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Books" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="gradient-primary sticky top-0 z-50 shadow-elevated">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Book className="h-7 w-7 text-success" />
            <span className="text-xl font-display font-bold text-primary-foreground">
              BookShelf
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-secondary/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-success text-success-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-primary-foreground/80 hover:bg-secondary/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-success text-success-foreground font-medium text-sm mt-2"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
