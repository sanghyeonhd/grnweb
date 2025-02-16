
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-granhand-warmGray/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            <Link to="/journal" className="nav-link">JOURNAL</Link>
            <Link to="/event" className="nav-link">EVENT</Link>
            <Link to="/awards" className="nav-link">AWARDS</Link>
            <Link to="/store" className="nav-link">STORE</Link>
          </div>
          <button className="p-2 hover:bg-granhand-warmGray/10 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
