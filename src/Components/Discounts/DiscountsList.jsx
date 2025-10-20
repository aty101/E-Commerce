import React from "react";
import ProductCard from "../../UI/ProductCard";

export default function DiscountsList() {
  return (
    <section className="px-3 py-6">
      <h2 className="text-2xl py-5 px-1 ">Discounts up to -50%</h2>
      <div className="flex flex-wrap gap-3 justify-center py-5">
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
