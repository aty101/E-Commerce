import { CiMobile4 } from "react-icons/ci";
import CategoryCard from "./CategoryCard";

export default function CategoriesCardsList() {
  return (
    <div className="flex flex-wrap gap-10 p-5 justify-center">
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
    </div>
  );
}
