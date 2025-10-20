import { TfiLayoutColumn3Alt } from "react-icons/tfi";
export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <nav className=" p-6 text-xl justify-between items-center flex ">
        <h1 className="font-bold">Cyber</h1>
        <TfiLayoutColumn3Alt className="rotate-90" />
      </nav>
    </header>
  );
}
