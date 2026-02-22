import { useLocation, useNavigate } from "react-router-dom";
import underweightImg from "../assets/underweight.png";
import healthyImg from "../assets/healthy.png";
import overweightImg from "../assets/overweight.png";
import obeseImg from "../assets/obese.png";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
    return null;
  }

  const { name, bmi } = location.state;

  let status = "";
  let info = "";
  let image = "";

  if (bmi < 18.5) {
    status = "Underweight";
    image = underweightImg;
    info = "You may need better nutrition and medical advice.";
  } 
  else if (bmi < 25) {
    status = "Healthy";
    image = healthyImg;
    info = "Great job! Maintain your healthy lifestyle.";
  } 
  else if (bmi < 30) {
    status = "Overweight";
    image = overweightImg;
    info = "Exercise regularly and follow a balanced diet.";
  } 
  else {
    status = "Obese";
    image = obeseImg;
    info = "Medical supervision is strongly recommended.";
  }

  return (
    <div className="result-bg">
      <div className="result-card">
        <h2>BMI Result</h2>

        <p>
          <strong>{name}</strong>, your BMI is <strong>{bmi}</strong>
        </p>

        <h3>You are {status}</h3>

        {/* 🔥 Image changes based on BMI */}
        <img src={image} alt={status} className="result-img" />

        <p className="info">{info}</p>

        <button onClick={() => navigate("/")}>
          Calculate Again
        </button>
      </div>
    </div>
  );
}

export default Result;
