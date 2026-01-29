import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Animation from "./components/Animation.jsx";
import About from "./pages/About.jsx";

import { ReactLenis } from "./utils/lenis";

createRoot(document.getElementById("root")).render(
  <ReactLenis root>
    <BrowserRouter>
      <Header />
      <Animation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ReactLenis>,
);
