import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
};

// Cart Reducer
function cartReducer(state, action) {
  switch (action.type) {
    // Add Product
    case "ADD": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };
    }

    // Increase Quantity
    case "INCREASE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item,
        ),
      };

    // Decrease Quantity
    case "DECREASE":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item,
          )
          .filter((item) => item.qty > 0),
      };

    // Remove Product
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // Clear Cart
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}

// Cart Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Total Products
  const totalItems = state.items.reduce((total, item) => total + item.qty, 0);

  // Total Price
  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  return useContext(CartContext);
}
