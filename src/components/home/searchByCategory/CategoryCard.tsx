import { IconType } from "react-icons";

export default function CategoryCard({
  Icon,
  category,
}: {
  Icon: IconType;
  category: string;
}) {
  return (
    <>
      <div className="flex py-5 rounded-lg w-[140px] flex-col gap-2 justify-center items-center bg-gray-200">
        <Icon size={50} color="black" />
        <p>{category}</p>
      </div>
    </>
  );
}
