import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom styles
import profilePic from "./assets/profile.jpg"; // Import profile picture

const generateRandomCode = () => {
  const codeSamples = [
    "console.log('Hello World!');",
    "SELECT * FROM users WHERE active = 1;",
    "fetch('https://api.example.com/data')",
    "const data = new Chart(ctx, { type: 'line', data: {...} });",
    "function processData(arr) { return arr.map(x => x * 2); }"
  ];
  return codeSamples[Math.floor(Math.random() * codeSamples.length)];
};

function App() {
  const [codeLines, setCodeLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines((prevLines) => [
        ...prevLines,
        { text: generateRandomCode(), id: Math.random() }
      ]);
      if (codeLines.length > 10) {
        setCodeLines((prevLines) => prevLines.slice(1));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines]);

  return (
    <div className="background-animation">
      <div className="code-overlay">
        {codeLines.map((line) => (
          <div
            key={line.id}
            className="code-line"
            style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }}
          >
            {line.text}
          </div>
        ))}
      </div>
      <Navbar />
      <header className="header-section text-center">
        <img src={profilePic} alt="Sai Bharadwaj Gundeboina" className="profile-pic" />
        <h1 className="header-title">Sai Bharadwaj Gundeboina</h1>
        <p className="header-subtitle">Full Stack Developer & Data Analyst</p>
      </header>
      <div className="container-fluid p-0">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        <section id="resume"><Resume /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
