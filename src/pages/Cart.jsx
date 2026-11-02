import { Trash2 } from "lucide-react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { state, dispatch, totalPrice } = useCart();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">
        Shopping <span className="text-cyan-400">Cart</span>
      </h1>

      {state.items.length === 0 ? (
        <div className="text-center bg-[#0c1731] rounded-2xl p-16">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-gray-400 mt-3">
            Start shopping to add your favorite products.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-5 bg-[#0c1731] border border-blue-500/20 rounded-xl p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain bg-blue-950 rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-cyan-400">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: item.id })
                    }
                    className="bg-blue-950 w-8 h-8 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item.id })
                    }
                    className="bg-blue-950 w-8 h-8 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                  className="text-red-400"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#0c1731] border border-blue-500/20 rounded-2xl p-6 h-fit">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="flex justify-between mt-8 text-gray-300">
              <span>Subtotal</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mt-4 text-gray-300">
              <span>Shipping</span>
              <span className="text-green-400">Free</span>
            </div>

            <hr className="border-blue-500/20 my-6" />

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-cyan-400">
                Rs. {totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              className="w-full mt-8 py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600"
              onClick={() => alert("Checkout is not connected yet!")}
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="w-full mt-3 text-red-400 py-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
