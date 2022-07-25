import { Card } from "react-bootstrap";

import "./styles.css";
import profile from "./HDFC-Bank-emblem.png";

export default function Home() {
  return (
    <center>
      <div className="srks4">
        <img src={profile} alt="profile" className="srks5" />
      </div>

      <center>
        <h1 className="bnks">
          HDFC Bank was incorporated in 1994 as a subsidiary of the Housing
          Development Finance Corporation, with its registered office in Mumbai,
          Maharashtra, India.
        </h1>
        <h2 className="bnks2"></h2>
      </center>
    </center>
  );
}
