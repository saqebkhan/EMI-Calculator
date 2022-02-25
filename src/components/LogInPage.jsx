import React from "react";
import { useState, useEffect } from "react";
import EMIcalculator from "./EMIcalculator";
import './LogInPage.css'

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const [isValid, setIsValid] = useState('');

 
  const logInHandler = () => {
    if (email.includes("@") && password.length > 5) {
      setActive(true);
    }else{setIsValid("Please Include '@' in Email and Password Length 6 or More to Log In")}
    localStorage.setItem("isLoggedIn", "1");
  };
  const logOutHandler = () => {
    setActive(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const logInInfo = localStorage.getItem("isLoggedIn");
    if (logInInfo === "1") setActive(true);
  }, []);

  return (
    <div>
      {!active && (
        <div className="wrapper">
            <h2 className="login-heading">Log In</h2>
          <input
            type="email"
            className="input-area"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-area"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{color:'red'}}>{isValid}</p>
          <button className="btnn" onClick={logInHandler}>Log In</button>
        </div>
      )}
      {active && <EMIcalculator onLogOut={logOutHandler} />}
    </div>
  );
};

export default LogInPage;
