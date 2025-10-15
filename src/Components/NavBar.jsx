import React from "react";
import Input from "../UI/Input";
import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import NavButtons from "../UI/NavButtons";
export default function NavBar() {
  return (
    <header>
      <nav className=" py-6 text-xl justify-center flex   gap-15 items-center">
        <h1 className="font-bold">Cyber</h1>
        <Input style={""} />
        <div className="flex gap-10">
          <NavButtons to={"/"}>Home</NavButtons>
          <NavButtons to={"about"}>About</NavButtons>
          <NavButtons to={"contact"}>Contact Us</NavButtons>
          <NavButtons to={"blog"}>Blog</NavButtons>
        </div>
        <div className="flex gap-7 text-3xl">
          <IoIosHeartEmpty className="" />
          <AiOutlineShoppingCart className="" />
          <BsPerson className="" />
        </div>
      </nav>
    </header>
  );
}
