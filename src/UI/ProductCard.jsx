import React from "react";
import Button from "./Button";
import { BsHeart } from "react-icons/bs";

export default function ProductCard({price,image,description}) {
  return (
    <div className="bg-gray-200 min-w-40 min-h-35 py-5  flex flex-col justify-center items-center gap-2 rounded-lg">
      <div className="w-full flex justify-end p-2">
        <BsHeart className="opacity-50 text-2xl" />
      </div>
      <img src={image} alt="" />
      <p className="">{description}</p>
      <strong>{price}</strong>
      <Button style={"bg-black  text-white px-9"}>Buy Now</Button>
    </div>
  );
}
