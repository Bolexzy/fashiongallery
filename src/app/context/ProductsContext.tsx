"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}

// Define the context value type
interface ContextProps {
  readonly products: Product[] | null;
  readonly setProducts: (products: Product[]) => void;
  readonly fetchProducts: (filter: string) => void;
}

const ProductContext = createContext<ContextProps>({} as ContextProps);

export const ProductContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetchProducts("popular");
  }, []);

  const fetchProducts = async (filter: string) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (filter === "popular") {
      popularProducts(data);
    } else if (filter === "men") {
      menProducts(data);
    } else if (filter === "women") {
      womenProducts(data);
    }
  };

  const popularProducts = (data: any[]) => {
    const newProducts = data?.filter((item) => {
      return (
        item.category === "women's clothing" ||
        item.category === "men's clothing"
      );
    });

    newProducts ? setProducts(newProducts) : null;
  };

  const menProducts = (data: any[]) => {
    const newProducts = data?.filter((item) => {
      return item.category === "men's clothing";
    });

    newProducts ? setProducts(newProducts) : null;
  };

  const womenProducts = (data: any[]) => {
    const newProducts = data?.filter((item) => {
      return item.category === "women's clothing";
    });

    newProducts && newProducts?.length > 0 ? setProducts(newProducts) : null;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
export const useProductContext = () => useContext(ProductContext);
