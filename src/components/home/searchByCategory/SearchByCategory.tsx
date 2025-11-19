import { LuGamepad } from "react-icons/lu";
import CategoryCard from "./CategoryCard";
import CategorySlide from "./CategorySlide";
import {
  FiSmartphone,
  FiCamera,
  FiHeadphones,
  FiMonitor,
} from "react-icons/fi";
import { TbDeviceWatch } from "react-icons/tb";
const categories = [
  {
    icon: FiSmartphone, // Updated Icon to FiSmartphone
    category: "Phones",
  },
  {
    icon: TbDeviceWatch, // Updated Icon to FiWatch
    category: "Smart Watches",
  },
  {
    icon: FiCamera, // Updated Icon to FiCamera
    category: "Cameras",
  },
  {
    icon: FiHeadphones, // Updated Icon to FiHeadphones
    category: "Headphones",
  },
  {
    icon: FiMonitor, // Updated Icon to FiMonitor
    category: "Computers ",
  },
  {
    icon: LuGamepad, // Updated Icon to FiMonitor
    category: "Gaming",
  },
];

export default function SearchByCategory() {
  return (
    <>
      <section className="bg-gray-100 px-2 py-10 flex flex-col gap-8">
        <CategorySlide />
        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          {categories.map((cat, index) => (
            <CategoryCard key={index} Icon={cat.icon} category={cat.category} />
          ))}
        </div>
      </section>
    </>
  );
}
