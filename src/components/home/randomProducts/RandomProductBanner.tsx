import Image from "next/image";

export default function RandomProductBanner({
  index,
  image,
  name,
  description,
}: {
  index: number;
  image: string;
  name: string;
  description: string;
}) {
  const bannerColors = [
    "bg-gray-50",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-700",
  ];

  return (
    <>
      <div
        className={` min-w-[320px] w-[320px] flex flex-col justify-center items-center gap-8 py-10  ${bannerColors[index]}`}
      >
        <Image
          src={image}
          alt={name}
          width={250}
          height={1}
          className="h-[220px]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">{name}</h2>
          <p className="opacity-60 line-clamp-1 overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
