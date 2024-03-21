import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import ImageGenerator from "./ImageGenerator.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


