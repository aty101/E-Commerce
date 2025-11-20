import ProductsList from "@/ui/ProductsList";
import { randomProducts } from "@/utils/randomProducts";

export default function ProductsPage() {
  return (
    <section className="py-10">
      <ProductsList data={randomProducts} />
    </section>
  );
}
