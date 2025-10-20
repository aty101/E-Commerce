import { CiMobile4 } from "react-icons/ci";
import CategoryCard from "./CategoryCard";

export default function CategoriesCardsList() {
  return (
    <div className="flex flex-wrap  gap-3 p-3 justify-center ">
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
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
      <CategoryCard title={"Phone"}>
        <CiMobile4 />
      </CategoryCard>
    </div>
  );
}
