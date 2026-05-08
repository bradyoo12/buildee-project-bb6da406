import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Buildee
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          &copy; 2026 Buildee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
