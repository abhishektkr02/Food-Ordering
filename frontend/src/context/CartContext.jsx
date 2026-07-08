import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const existingItem = cartItems.find(
      (item) => item.name === food.name
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === food.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (name) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (name) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;