import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import NavBar from "./Pages/Pages_Main_Parts/NavBar";
import Footer from "./Pages/Pages_Main_Parts/Footer";

export default function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
