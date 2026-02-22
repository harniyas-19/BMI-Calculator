import { Routes, Route } from "react-router-dom";
import BMICalculator from "./pages/BMICalculator";
import Result from "./pages/Result";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMICalculator />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
