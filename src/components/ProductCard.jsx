import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="group bg-[#0c1731] border border-blue-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/60 hover:-translate-y-2 transition duration-300">
      <div className="h-52 p-5 bg-gradient-to-br from-blue-950 to-purple-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="text-yellow-400 flex items-center gap-1 text-sm">
            <Star size={14} fill="currentColor" />
            {product.rating}
          </span>
        </div>

        <p className="text-gray-400 text-sm mt-2">{product.description}</p>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-cyan-400 font-bold text-lg">
            Rs. {product.price.toLocaleString()}
          </span>
          <span className="text-gray-500 line-through text-sm">
            Rs. {product.oldPrice.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => dispatch({ type: "ADD", payload: product })}
          className="w-full mt-5 flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-xl font-semibold hover:brightness-125 transition"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
