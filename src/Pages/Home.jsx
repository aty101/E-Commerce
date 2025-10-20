import React from "react";
import NewArrival from "../Components/NewArrival";
import BrowseByCategory from "../Components/BrowseByCategory/BrowseByCategory";
import ProductsList from "../Components/ShowProducts/ProductsList";
import DiscountsList from "../Components/Discounts/DiscountsList";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="">
      <NewArrival></NewArrival>
      <BrowseByCategory></BrowseByCategory>
      <ProductsList></ProductsList>
      <DiscountsList></DiscountsList>
      <Footer></Footer>
    </main>
  );
}
