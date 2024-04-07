import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
// import MarketPlace from "./pages/MarketPlace"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        {/* <Route path="/features" element={<Learn />} /> */}
        {/* <Route path="/marketplace" element={<MarketPlace />} /> */}
        <Route path="*" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
