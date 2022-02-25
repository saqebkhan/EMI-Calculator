import React from "react";
import "./EMIcalculator.css";
import EMIHistoryItem from "./EMIHistoryItem";

const EMIHistory = (props) => {
  return (
    <div className="history-division">
      <table className="history-table">
        <thead>
          <tr className="history-heads">
            <th>Principle</th>
            <th>Month</th>
            <th>Intrest Rate</th>
            <th>Search</th>
          </tr>
        </thead>
        {props.history.map((ele) => (
          <EMIHistoryItem
            principle={ele.principle}
            months={ele.months}
            interest={ele.interest}
            
          />
        ))}
      </table>
    </div>
  );
};

export default EMIHistory;
