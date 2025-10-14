import React from "react";

export default function Input({
  placeholder,
  style,
  type,
  onChange,
  key,
  name,
  value,
}) {
  return (
    <input
      key={key}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`border border-black rounded-md p-1 ${style}`}
      placeholder={placeholder}
    />
  );
}
