import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Search } from "lucide-react";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-[#030817]/90 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <ShoppingBag className="text-cyan-400" />
          Mega <span className="text-cyan-400">Store</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-semibold"
                  : "text-gray-300 hover:text-cyan-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Search className="hidden sm:block text-gray-300" />

          <Link to="/cart" className="relative">
            <ShoppingCart className="text-white" />
            <span className="absolute -top-3 -right-3 bg-purple-600 text-xs rounded-full px-1.5">
              {totalItems}
            </span>
          </Link>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
