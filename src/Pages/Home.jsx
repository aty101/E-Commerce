import BrowseByCategory from "../Components/BrowseByCategory/BrowseByCategory";
import ProductsList from "../Components/ShowProducts/ProductsList";
import DiscountsList from "../Components/Discounts/DiscountsList";
import Footer from "../Components/Footer";
import BannersList from "../Components/BannersList";

export default function Home() {
  return (
    <main className="">
      <BannersList></BannersList>
      <BrowseByCategory></BrowseByCategory>
      <ProductsList></ProductsList>
      <DiscountsList></DiscountsList>
      <Footer></Footer>
    </main>
  );
}
