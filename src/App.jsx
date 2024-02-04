import About from "./section/About";
import Home from "./section/Home";
import Project from "./section/Project";
import Contact from "./section/Contact";
import { Route, Routes } from "react-router";
import Skills from "./section/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
