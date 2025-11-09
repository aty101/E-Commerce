import React from "react";
import ProductCard from "../../UI/ProductCard";

export default function ProductsList({data,children}) {
  return (
    <section className="px-3 py-6">
     {children}
      <div className="flex flex-wrap gap-3 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
