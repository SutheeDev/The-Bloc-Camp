import { Landing, Shows } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
