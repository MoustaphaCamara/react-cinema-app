import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/liked" element={<Liked />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
