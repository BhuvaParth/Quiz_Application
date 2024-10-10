import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Python from "./components/Python";
import Css from "./components/Css";
import Angular from "./components/Angular";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<Python />} />
        <Route path="/css" element={<Css />} />
        <Route path="/angular" element={<Angular />} />
      </Routes>
    </div>
  );
}

export default App;
