import React from "react";
import NewArrival from "../Components/NewArrival";
import BrowseByCategory from "../Components/BrowseByCategory";

export default function Home() {
  return (
    <main className="">
      <NewArrival></NewArrival>
      <BrowseByCategory></BrowseByCategory>
    </main>
  );
}
