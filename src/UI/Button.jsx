
export default function Button({ children, style, type, onClick, key }) {
  return (
    <button
      key={key}
      type={type}
      onClick={onClick}
      className={`p-3 border border-black rounded-md ${style}`}
    >
      {children}
    </button>
  );
}
