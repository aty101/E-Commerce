"use client";

import SpecilaItemsNav from "./SpecilaItemsNav";
import { createContext, useState } from "react";
import { specialItems } from "@/utils/specialItems";
import ProductsList from "@/ui/ProductsList";

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
        <ProductsList data={specialItems[currentList]} />
      </SpecialProductsContex.Provider>
    </nav>
  );
}
