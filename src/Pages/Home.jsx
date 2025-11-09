import BrowseByCategory from "@components/BrowseByCategory/BrowseByCategory";
import ProductsList from "@components/ShowProducts/ProductsList";
import DiscountsList from "@components/Discounts/DiscountsList";
import BannersList from "@components/BannersList";

export default function Home() {
  return (
    <main className="">
      <BannersList></BannersList>
      <BrowseByCategory></BrowseByCategory>
      <ProductsList>
        <div className="flex gap-4 py-5">
          <button className="text-lg">New Arrival</button>
          <button className="text-lg">Bestseller</button>
          <button className="text-lg">Featured Products</button>
        </div>
      </ProductsList>
      <DiscountsList></DiscountsList>
    </main>
  );
}
