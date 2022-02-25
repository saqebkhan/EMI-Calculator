import React from 'react';

const EMIinputs = (props) => {
    return (
        <div>
            <div>
          <input
            className="input-emi"
            type="number"
            placeholder="Principle"
            onChange={(e) => props.setedP(e.target.value)}
          />
          <input
            className="input-emi"
            type="number"
            placeholder="Number Of Months"
            onChange={(e) => props.setedN(e.target.value)}
          />
          <input
            className="input-emi"
            type="number"
            placeholder="Rate Of Intrest"
            onChange={(e) => props.setedR(e.target.value)}
          />
          <button
            variant="outline-success"
            onClick={props.emiHandeler}
            className="calculate-btn"
          >
            Calculate EMI
          </button>
        </div>
        </div>
    );
};

export default EMIinputs;