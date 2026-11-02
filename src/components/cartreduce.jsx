import { useReducer } from "react";

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "Add_items": {
      const exist = state.items.find((i) => i.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };
    }
    case "increase":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
        ),
      };
    case "decrease":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty - 1 } : i,
          )
          .filter((i) => i.qty > 0),
      };
    case "Remove_item":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    case "Clear":
      return initialState;
    default:
      return state;
  }
}

export function ReduceCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      price: 50000,
      desc: "High performance work machine",
    },
    {
      id: 2,
      name: "Smart Mobile",
      price: 30000,
      desc: "5G enabled flagship phone",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 5000,
      desc: "Active noise cancellation",
    },
  ];

  const totalAmount = state.items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          borderBottom: "2px solid #e9ecef",
          paddingBottom: "15px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "#212529", fontSize: "28px", margin: 0 }}>
          Mega Store
        </h1>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* Left Column */}
        <div>
          <h2
            style={{ fontSize: "20px", color: "#495057", marginBottom: "20px" }}
          >
            Our Products
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      margin: "0 0 5px 0",
                      color: "#212529",
                      fontSize: "18px",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p style={{ margin: 0, color: "#6c757d", fontSize: "14px" }}>
                    {product.desc}
                  </p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#212529",
                    }}
                  >
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({ type: "Add_items", payload: product })
                    }
                    style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            height: "fit-content",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              color: "#495057",
              marginTop: 0,
              marginBottom: "20px",
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
            }}
          >
            Shopping Cart ({state.items.reduce((acc, i) => acc + i.qty, 0)})
          </h2>

          {state.items.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "30px 0",
                color: "#6c757d",
              }}
            >
              <p style={{ margin: 0 }}>Your cart is empty.</p>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  maxHeight: "400px",
                  overflowY: "auto",
                  paddingRight: "5px",
                }}
              >
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #f1f3f5",
                      paddingBottom: "10px",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          margin: "0 0 5px 0",
                          fontSize: "15px",
                          color: "#212529",
                        }}
                      >
                        {item.name}
                      </h4>
                      <span style={{ color: "#6c757d", fontSize: "14px" }}>
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={() =>
                          dispatch({ type: "decrease", payload: item })
                        }
                        style={{
                          border: "1px solid #dee2e6",
                          background: "#fff",
                          borderRadius: "4px",
                          width: "26px",
                          height: "26px",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          minWidth: "20px",
                          textAlign: "center",
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({ type: "increase", payload: item })
                        }
                        style={{
                          border: "1px solid #dee2e6",
                          background: "#fff",
                          borderRadius: "4px",
                          width: "26px",
                          height: "26px",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "Remove_item", payload: item })
                        }
                        style={{
                          background: "none",
                          border: "none",
                          color: "#dc3545",
                          cursor: "pointer",
                          marginLeft: "5px",
                          fontSize: "14px",
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "15px",
                  borderTop: "2px dashed #dee2e6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Total:</span>
                  <span style={{ color: "#198754" }}>
                    Rs. {totalAmount.toLocaleString()}
                  </span>
                </div>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#198754",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => dispatch({ type: "Clear" })}
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    color: "#6c757d",
                    border: "1px solid #dee2e6",
                    padding: "8px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
