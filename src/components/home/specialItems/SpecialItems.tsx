"use client";
import ProductCard from "@/ui/ProductCard";
import SpecilaItemsNav from "./SpecilaItemsNav";
import { createContext, useState } from "react";
import { products } from "./products";

type ContextType = {
  currentList: "New Arrival" | "Bestseller" | "Featured Product";
  setCurrentList: React.Dispatch<
    React.SetStateAction<"New Arrival" | "Bestseller" | "Featured Product">
  >;
} | null;
export const SpecialProductsContex = createContext<ContextType>(null);

export default function SpecialItems() {
  const [currentList, setCurrentList] = useState<
    "New Arrival" | "Bestseller" | "Featured Product"
  >("New Arrival");
  return (
    <nav className="py-10">
      <SpecialProductsContex.Provider value={{ currentList, setCurrentList }}>
        <SpecilaItemsNav />
        <div className="flex flex-wrap gap-2 justify-center ">
          {products[currentList].map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
            />
          ))}
        </div>
      </SpecialProductsContex.Provider>
    </nav>
  );
}
