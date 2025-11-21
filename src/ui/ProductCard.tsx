import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export default function ProductCard({
  image,
  name,
}: {
  image?: string | null;
  name?: string | null;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-lg items-center  bg-gray-200 w-[150px] py-5 ">
        <div className="flex flex-row-reverse w-full ">
          <CiHeart size={30} className="opacity-50 color" />
        </div>
        <Image
          src={image || ""}
          alt={name || ""}
          width={120}
          height={120}
          className="w-[120px] h-[120px]"
        />
        <div>
          <p className="text-lg line-clamp-1 text-center overflow-hidden w-full">
            {name || ""}
          </p>
        </div>
        <button className="bg-black rounded-lg text-white py-3 w-[85%]">
          Buy Now
        </button>
      </div>
    </>
  );
}
