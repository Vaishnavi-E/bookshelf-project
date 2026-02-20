import { useState } from "react";
import { BookOpen, Search } from "lucide-react";

const allBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925, status: "Available" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, status: "Available" },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, status: "Borrowed" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813, status: "Available" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, status: "Borrowed" },
  { id: 6, title: "Brave New World", author: "Aldous Huxley", genre: "Sci-Fi", year: 1932, status: "Available" },
  { id: 7, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", year: 1851, status: "Available" },
  { id: 8, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", year: 1869, status: "Borrowed" },
];

const Books = () => {
  const [search, setSearch] = useState("");

  const filtered = allBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-muted py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-display font-bold text-foreground mb-6">Book Collection</h1>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search books by title, author, or genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
        </div>

        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="gradient-primary text-primary-foreground">
                  <th className="text-left py-3 px-4 font-semibold">#</th>
                  <th className="text-left py-3 px-4 font-semibold">Title</th>
                  <th className="text-left py-3 px-4 font-semibold">Author</th>
                  <th className="text-left py-3 px-4 font-semibold">Genre</th>
                  <th className="text-left py-3 px-4 font-semibold">Year</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((book, i) => (
                  <tr
                    key={book.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-muted-foreground">{i + 1}</td>
                    <td className="py-3 px-4 font-medium text-foreground flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-accent flex-shrink-0" />
                      {book.title}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{book.author}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                        {book.genre}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{book.year}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          book.status === "Available"
                            ? "bg-success/10 text-success"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">
                      No books found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
