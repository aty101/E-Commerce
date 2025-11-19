import Image from "next/image";

export default function Top4Banner({
  image,
  name,
  description,
  index,
  first = false,
  last = false,
}: {
  image: string;
  name: string;
  description: string;
  index: number;
  first: boolean;
  last: boolean;
}) {
  const bannerPadding: string = index == 0 ? "pt-10" : "py-10";
  const bannerBackGroundColor: string =
    index % 2 === 0 ? "bg-[#211c24]" : "bg-[#ededed]";
  const textColor: string = index % 2 === 0 ? "text-white" : "text-black";
  const borderColor: string = index % 2 === 0 ? "border-white" : "border-black";
  return (
    <>
      <div
        className={`min-h-[300px] flex flex-col justify-center items-center gap-8 ${bannerPadding} ${bannerBackGroundColor}`}
      >
        {index != 0 && (
          <Image src={image} alt={name} width={250} height={200} />
        )}
        <div
          className={`w-full flex flex-col justify-center items-center gap-4 ${textColor}`}
        >
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="opacity-50">{description}</p>
        </div>
        {(first || last) && (
          <button
            className={`border ${borderColor} ${textColor} rounded-md py-3 ${
              first ? "px-10 " : "w-[90%]"
            }`}
          >
            Shop Now
          </button>
        )}
        {first && <Image src={image} alt={name} width={250} height={200} />}
      </div>
    </>
  );
}
