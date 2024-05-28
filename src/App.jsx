import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import AllProjectPage from "./pages/AllProjectPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  console.log(`${import.meta.env.VITE_DEPLOY_TARGET}`);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<AllProjectPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
