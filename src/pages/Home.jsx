import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Headphones, RefreshCw } from "lucide-react";
import { products } from "../Product_data/data";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
    { icon: ShieldCheck, title: "Secure Payments", desc: "100% Secure" },
    { icon: Headphones, title: "24/7 Support", desc: "Always Here" },
    { icon: RefreshCw, title: "Easy Returns", desc: "30 Days Return" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full text-sm">
            ✨ Welcome to Mega Store
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-8">
            Discover Your
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Next Favorite
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-lg">
            Shop smarter. Live better. Get the best products with unbeatable
            prices.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-4 rounded-full font-bold"
            >
              Shop Now →
            </Link>

            <Link
              to="/about"
              className="border border-purple-400 px-7 py-4 rounded-full hover:bg-purple-500/10"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000"
            alt="Premium laptop"
            className="relative w-full rounded-3xl border border-blue-400/20 shadow-2xl shadow-blue-500/20"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#0c1731] border border-blue-500/20 rounded-xl p-6 flex gap-4 items-center"
          >
            <Icon className="text-cyan-400" size={32} />
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">Our Products</h2>
            <p className="text-gray-400 mt-2">Top Picks Just for You</p>
          </div>
          <Link to="/shop" className="text-cyan-400">
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
