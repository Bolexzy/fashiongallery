"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Define the context value type
interface ContextProps {
  readonly cart: any[] | null;
  readonly setCart: (cart: any[]) => void;
  readonly addToCart: (product: Product, id: number | string) => void;
  readonly removeFromCart: (id: number | string) => void;
  readonly clearCart: () => void;
  readonly increaseAmount: (id: number | string) => void;
  readonly decreaseAmount: (id: number | string) => void;
  readonly itemAmount: number;
  readonly total: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}
const CartContext = createContext<ContextProps>({} as ContextProps);

export const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<any[] | null>(null);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product: Product, id: number | string) => {
    const newItem = { ...product, amount: 1 };
    // check if item is already in the cart
    const cartItem = cart?.find((item) => {
      return item.id === newItem.id;
    });

    // increase cartitem amount if exists
    if (cartItem) {
      const newCart = [...(cart || [])].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...(cart || []), newItem]);
    }
    console.log(cart);
  };

  // remove from cart
  const removeFromCart = (id: number | string) => {
    const newCart = cart?.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart || null);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id: number | string) => {
    const cartItem = cart?.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id: number | string) => {
    const cartItem = cart?.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart?.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      newCart ? setCart(newCart) : null;
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export const useProductContext = () => useContext(CartContext);
