import { cloneElement } from "react";

export default function CategoryCard({ children, title, style }) {
  return (
    <div className="bg-gray-200 min-w-40 min-h-35 flex flex-col justify-center items-center gap-2 rounded-lg">
      {cloneElement(children, { className: `text-5xl ${style}` })}
      <span className="text-lg">{title}</span>
    </div>
  );
}
