import React from "react";
import CategoriesCardsList from "./CategoriesCardsList";

export default function BrowseByCategory() {
  return (
    <section className="bg-gray-100 px-40 py-15">
      <div className="flex justify-between p-5 items-center">
        <h2 className="text-3xl ">Browse By Category</h2>
        <div>scroll buttons</div>
      </div>
      <div className="">
        <CategoriesCardsList></CategoriesCardsList>
      </div>
    </section>
  );
}
