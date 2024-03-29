import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ProductContextProvider } from "./context/ProductsContext";
import { SidebarContextProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import { CartContextProvider } from "./context/CartContext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion Gallery",
  description:
    "At Fashion Gallery Boutique our mission is to empower women and men to always look and feel their best.",
};

type ChildrenProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="">
        <SidebarContextProvider>
          <CartContextProvider>
            <Header />
            <Sidebar />
            <ProductContextProvider>{children}</ProductContextProvider>
            <Footer />
          </CartContextProvider>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
