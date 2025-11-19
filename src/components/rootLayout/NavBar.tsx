import { LuMenu } from "react-icons/lu";

export default function NavBar() {
  return (
    <>
      <nav className="w-full py-5 px-3 flex justify-between items-center rounded-md ">
        <h1 className="text-2xl  font-bold">cyber</h1>
        <button>
          <LuMenu className="text-3xl" />
        </button>
      </nav>
    </>
  );
}
