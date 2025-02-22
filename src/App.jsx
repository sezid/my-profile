import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Certificates/Contact";
import Project_Page from "./components/Projects/Project_Page";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ThankYou from "./components/ThanksPage/ThankYou.jsx";

function App() {
  return (
    <div className="bg-[url(assets/background.webp)] bg-cover bg-fixed min-h-screen  animate-fade ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_page" element={<Project_Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
