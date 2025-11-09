import { cloneElement } from "react";

export default function Button({ children, style, type, onClick, key,Icon }) {
  return (
    <button
      key={key}
      type={type}
      onClick={onClick}
      
      className={`p-3 border border-black rounded-md flex items-center gap-15 ${style}`}
    >
      {children}
      {Icon && cloneElement(Icon,{className:"text-2xl"})}
    </button>
  );
}
