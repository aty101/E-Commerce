import ProductsList from "@/ui/ProductsList";
import { discounts } from "@/utils/discounts";

export default function Discounts() {
  return (
    <section className="py-10 ">
      <h2 className="text-2xl py-7 px-2">Discounts up to 50%</h2>
      <ProductsList data={discounts} />
    </section>
  );
}
