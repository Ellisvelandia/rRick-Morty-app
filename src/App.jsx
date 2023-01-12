import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import InfoCharacter from "./pages/InfoCharacter";
import EpisodeVideo from "./pages/EpisodeVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/episodevideo/:id" element={<EpisodeVideo />}></Route>
          <Route path="/card/:id" element={<InfoCharacter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
