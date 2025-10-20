import React from "react";
import CategoriesCardsList from "./CategoriesCardsList";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function BrowseByCategory() {
  return (
    <section className="bg-gray-100 py-6 my-6 rounded-lg">
      <div className="flex justify-between py-6 px-3  items-center">
        <h2 className="text-2xl">Browse By Category</h2>
        <div className="flex gap-5">
          <TfiAngleLeft className="text-3xl" />
          <TfiAngleRight className="text-3xl" />
        </div>
      </div>

      <CategoriesCardsList></CategoriesCardsList>
    </section>
  );
}
