import React from "react";

const EMIinputs = (props) => {
  return (
    <div>
      <div>
        <input
          className="input-emi"
          type="number"
          min="1"
          placeholder="Principle"
          onChange={(e) => props.setedP(e.target.value)}
        />
        <input
          className="input-emi"
          type="number"
          min="1"
          step="1"
          placeholder="Number Of Months"
          onChange={(e) => props.setedN(e.target.value)}
        />
        <input
          className="input-emi"
          type="number"
          min="1.0"
          step="0.1"
          placeholder="Rate Of Intrest"
          onChange={(e) => props.setedR(e.target.value)}
        />
        <button onClick={props.emiHandeler} className="calculate-btn">
          Calculate EMI
        </button>
      </div>
    </div>
  );
};

export default EMIinputs;
