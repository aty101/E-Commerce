import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="">
      <NavBar></NavBar>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
      </Routes>
    </div>
  );
}
