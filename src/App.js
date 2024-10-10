import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import English from "./components/English";
import Reactjs from "./components/Reactjs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/react" element={<Reactjs />} />
      </Routes>
    </div>
  );
}

export default App;
