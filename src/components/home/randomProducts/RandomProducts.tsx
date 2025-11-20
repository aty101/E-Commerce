import { randomProducts } from "@/utils/randomProducts";
import RandomProductBanner from "./RandomProductBanner";

export default function RandomProducts() {
  return (
    <section className=" flex overflow-x-auto overflow-y-hidden">
      {randomProducts.map((product, index) => (
        <RandomProductBanner
          key={index}
          index={index}
          image={product.image}
          name={product.name}
          description={product.description}
        />
      ))}
    </section>
  );
}
