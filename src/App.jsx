import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
