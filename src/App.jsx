import "./App.css";
import BodyLayout from "./components/body/BodyLayout";
import FooterLayout from "./components/footer/FooterLayout";
import NavigationLayout from "./components/navigation/NavigationLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/body/HomeLayout/Home";
import About from "./components/body/About";
import Services from "./components/body/Services";
import { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavigationLayout isScrolled={isScrolled} />
      <BodyLayout>
        <Routes>
          <Route path="/Animalx" element={<Home />} />
          <Route path="/Animalx/about" element={<About />} />
          <Route path="/Animalx/services" element={<Services />} />
        </Routes>
      </BodyLayout>
      <FooterLayout />
    </>
  );
}

export default App;
