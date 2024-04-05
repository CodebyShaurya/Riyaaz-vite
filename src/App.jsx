import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Learn from "./pages/Learn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/features" element={<Learn />} />
        <Route path="/marketplace" element={<Learn />} />
        <Route path="*" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}
