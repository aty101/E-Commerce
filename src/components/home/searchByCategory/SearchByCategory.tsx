import { categories } from "@/utils/categories";
import CategoryCard from "./CategoryCard";
import CategorySlide from "./CategorySlide";

export default function SearchByCategory() {
  return (
    <>
      <section className="bg-gray-100 px-2 py-10 flex flex-col gap-8">
        <CategorySlide />
        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          {categories.map((cat, index) => (
            <CategoryCard key={index} Icon={cat.icon} category={cat.category} />
          ))}
        </div>
      </section>
    </>
  );
}
