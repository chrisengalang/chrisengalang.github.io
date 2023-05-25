import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Cv from "./Cv";
import Home from "./Home/Home";
import Portfolio from "./Portfolio";
import "./main.css";

const Main = () => {
  return (
    <div className="col-9 vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
