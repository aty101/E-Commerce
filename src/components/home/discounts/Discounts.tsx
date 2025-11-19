import ProductCard from "@/ui/ProductCard";
import { data } from "./data";

export default function Discounts() {
  return (
    <section className="py-10 ">
      <h2 className="text-2xl py-7 px-2">Discounts up to 50%</h2>
      <div className="flex flex-wrap gap-2 justify-center ">
        {data.map((product, index) => (
          <ProductCard key={index} image={product.image} name={product.name} />
        ))}
      </div>
    </section>
  );
}
