import { products } from "../Product_data/data";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">
        Explore Our <span className="text-cyan-400">Collection</span>
      </h1>

      <p className="text-gray-400 mt-3 mb-10">
        Discover premium products at amazing prices.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
