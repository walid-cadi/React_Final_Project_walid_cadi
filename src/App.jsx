import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer } from "./layouts/Footer";
import { NavBar } from "./layouts/NavBar";
import About from "./pages/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
