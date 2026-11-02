import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-blue-500/20 bg-[#050d20] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-cyan-400" />
            Mega Store
          </h2>
          <p className="text-gray-400 mt-5 leading-7">
            Shop smart. Live better. Discover premium products at amazing
            prices.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">Quick Links</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">Customer Care</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/contact">Help Center</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-5">Follow Us</h3>
          <p className="text-gray-400">
            Stay connected for new products and offers.
          </p>
          <div className="flex gap-4 mt-5 text-cyan-400">
            <span>Facebook</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500/20 py-6 text-center text-gray-500 text-sm">
        © 2026 Mega Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
