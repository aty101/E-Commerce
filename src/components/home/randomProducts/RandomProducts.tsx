import RandomProductBanner from "./RandomProductBanner";
const products = [
  {
    image: "/images/Iphone Image.png",
    name: "IPhone 14 Pro",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/hero__gnfk5g59t0qe_xlarge_2x 1.png",
    name: "Apple AirPods Max",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/image 36.png",
    name: "Apple Vision Pro",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/PlayStation.png",
    name: "Playstation 5",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },

];
export default function RandomProducts() {
  return (
    <section className=" flex overflow-x-auto overflow-y-hidden">
      {products.map((product, index) => (
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
