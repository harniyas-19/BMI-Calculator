import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BMICalculator.css";

function BMICalculator() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!name || !height || !weight) {
      alert("Please fill all fields");
      return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(2);

    navigate("/result", {
      state: { name, bmi }
    });
  };

  return (
    <div className="bmi-bg">
      <div className="card">
        <h2>BMI Calculator</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
    </div>
  );
}

export default BMICalculator;
