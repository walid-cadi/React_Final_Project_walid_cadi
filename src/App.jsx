import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer } from "./layouts/Footer";
import { NavBar } from "./layouts/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
