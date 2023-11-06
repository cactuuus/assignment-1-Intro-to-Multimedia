import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import HobbiesPage from "./pages/HobbiesPage";
import CourseworkPage from "./pages/CourseworkPage";
import ClockPage from "./pages/ClockPage";

function App() {
  // Checks if a saved theme is available
  const getSavedTheme = () => {
    let savedTheme = localStorage.getItem("theme");
    savedTheme = savedTheme ? savedTheme : "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    return savedTheme;
  };

  const [theme, setTheme] = useState(getSavedTheme());

  // Switch between light and dark theme
  const handleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <Header theme={theme} handleTheme={handleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        <Route path="/coursework" element={<CourseworkPage />} />
        <Route path="/clock" element={<ClockPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
