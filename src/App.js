import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
