import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer } from "./layouts/Footer";
import { NavBar } from "./layouts/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
