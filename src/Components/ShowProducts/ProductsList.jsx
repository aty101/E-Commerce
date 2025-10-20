import React from "react";
import ProductCard from "../../UI/ProductCard";

export default function ProductsList() {
  return (
    <section className="px-3 py-6">
      <div className="flex gap-4 py-5">
        <button className="text-lg">New Arrival</button>
        <button className="text-lg">Bestseller</button>
        <button className="text-lg">Featured Products</button>
      </div>
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
