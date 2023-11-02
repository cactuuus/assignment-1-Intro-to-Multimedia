import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { getSavedTheme } from "./functions/theme-functions";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import HobbiesPage from "./pages/HobbiesPage";
import CourseworkPage from "./pages/CourseworkPage";
import ClockPage from "./pages/ClockPage";

function App() {
  const savedTheme = getSavedTheme();
  const [theme, setTheme] = useState(savedTheme);

  return (
    <BrowserRouter>
      <Header theme={theme} setTheme={setTheme} />
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
