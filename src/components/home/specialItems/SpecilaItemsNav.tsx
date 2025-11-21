"use client";
import { useContext } from "react";
import { SpecialProductsContex } from "./SpecialItems";

const SpecialItemsButton = ({ children }: { children: string }) => {
  const context = useContext(SpecialProductsContex);
  const handleClick = () => {
    if (
      children === "New Arrival" ||
      children === "Bestseller" ||
      children === "Featured Product"
    )
      context?.setCurrentList(children);
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        context?.currentList === children
          ? "text-black underline underline-offset-8 "
          : "opacity-50"
      }`}
    >
      {children}
    </button>
  );
};

export default function SpecilaItemsNav() {
  return (
    <>
      <div className="flex px-2 justify-center gap-3  pb-5">
        <SpecialItemsButton>New Arrival</SpecialItemsButton>
        <SpecialItemsButton>Bestseller</SpecialItemsButton>
        <SpecialItemsButton>Featured Product</SpecialItemsButton>
      </div>
    </>
  );
}
