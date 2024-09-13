import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer } from "./layouts/Footer";
import { NavBar } from "./layouts/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
