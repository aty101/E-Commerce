import Discounts from "@/components/home/discounts/Discounts";
import RandomProducts from "@/components/home/randomProducts/RandomProducts";
import SearchByCategory from "@/components/home/searchByCategory/SearchByCategory";
import SpecialItems from "@/components/home/specialItems/SpecialItems";
import Top4 from "@/components/home/top4/Top4";

export default function Home() {
  return (
    <div>
      <Top4 />
      <SearchByCategory />
      <SpecialItems />
      <RandomProducts />
      <Discounts />
    </div>
  );
}
