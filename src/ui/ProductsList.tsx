import ProductCard from "./ProductCard";

export default function ProductsList({
  data,
}: {
  data: {
    image: string | null;
    name: string | null;
  }[];
}) {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center ">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            image={product?.image}
            name={product?.name}
          />
        ))}
      </div>
    </>
  );
}
