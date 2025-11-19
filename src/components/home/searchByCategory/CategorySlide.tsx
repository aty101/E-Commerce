import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CategorySlide() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Browse By Category</h2>
        <div className="flex gap-2">
          <FaChevronLeft size={30} />
          <FaChevronRight size={30} />
        </div>
      </div>
    </>
  );
}
