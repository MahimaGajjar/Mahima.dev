import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("circle-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const clickEffect = () => {
      cursor.classList.add("click-effect");
      setTimeout(() => cursor.classList.remove("click-effect"), 200);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickEffect);
      document.body.removeChild(cursor);
    };
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
