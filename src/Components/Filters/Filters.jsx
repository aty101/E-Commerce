import { TfiAngleLeft } from "react-icons/tfi";

export default function Filters({ closeWindow }) {
  
  return (
    <div className="top-0 left-0 fixed w-[100%] h-[100%] bg-white opacity-100 p-5">
      <div className="flex gap-5 items-center">
        <button onClick={closeWindow} className="mb-5">
          <TfiAngleLeft className="text-xl text-black" />
        </button>
        <h2 className="text-2xl font-bold mb-5">Filters</h2>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span>1333</span>
          <span>124124</span>
        </div>
         
      </div>
    </div>
  );
}
