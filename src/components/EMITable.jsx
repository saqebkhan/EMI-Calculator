import React from "react";
import "./EMIcalculator.css";

const EMITable = (props) => {
  return (
    <div>
      <table className="pay-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Pay</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {props.table &&
            props.arr.map((ele, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{props.EMI}</td>
                <td>{ele}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EMITable;
