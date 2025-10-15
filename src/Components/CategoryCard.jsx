import { cloneElement } from "react";

export default function CategoryCard({ children, title, style }) {
  return (
    <div className="bg-gray-200 w-40 h-35  flex flex-col justify-center items-center gap-2 rounded-lg">
      {cloneElement(children, { className: `text-5xl ${style}` })}
      <span className="text-xl font-medium">{title}</span>
    </div>
  );
}
