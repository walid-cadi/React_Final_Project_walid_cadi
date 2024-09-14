import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer } from "./layouts/Footer";
import { NavBar } from "./layouts/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Shop } from "./pages/Shop";
import { ShopInfo } from "./pages/ShopInfo";
import { Auth } from "./pages/auth/Auth";
import { Register } from "./pages/auth/Register";
import { MyProvider } from "./context";

function App() {
  return (
    <>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopInfo />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </MyProvider>
    </>
  );
}

export default App;
