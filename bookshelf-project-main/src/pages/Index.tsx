import { BookOpen, Search, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-books.jpg";

const sampleBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951 },
  { id: 6, title: "Brave New World", author: "Aldous Huxley", genre: "Sci-Fi", year: 1932 },
];

const features = [
  { icon: BookOpen, title: "Catalog Books", desc: "Organize your entire library with ease" },
  { icon: Search, title: "Quick Search", desc: "Find any book in seconds" },
  { icon: Users, title: "Share Lists", desc: "Collaborate with fellow readers" },
  { icon: TrendingUp, title: "Track Progress", desc: "Monitor your reading goals" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[480px] overflow-hidden">
        <img src={heroImage} alt="Books on shelf" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
              Manage Your <span className="text-success">Book Collection</span> Effortlessly
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-lg font-body">
              Organize, discover, and track every book in your library with BookShelf.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/books"
                className="px-6 py-3 rounded-lg bg-success text-success-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Browse Books
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-10">
            Why <span className="text-accent">BookShelf</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-accent mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book List */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-10">
            Popular Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleBooks.map((book) => (
              <div
                key={book.id}
                className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-16 rounded gradient-primary flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-foreground truncate">{book.title}</h3>
                    <p className="text-muted-foreground text-sm">{book.author}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                        {book.genre}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {book.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
