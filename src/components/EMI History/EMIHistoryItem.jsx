import React, { useState } from "react";

const EMIHistoryItem = (props) => {
  const [showHistory, setShowHistory] = useState(false);

  const si = (props.principle * (props.months / 12) * props.interest) / 100;
  const repayAmount = Number(props.principle) + Number(si);
  const emiLocal = Math.ceil(repayAmount / props.months);
  let balance = (emiLocal * props.months);
  const arr = [];

  for (let i = 1; i <= props.months; i++) {
    balance -= emiLocal;
    arr.push(balance);
  }
console.log(emiLocal)
  return (
    <>
      <tbody>
        <tr>
          <td>{props.principle}</td>
          <td>{props.months}</td>
          <td>{props.interest}</td>
          <button className="history-btn" onClick={() => setShowHistory(true)}>
            Search
          </button>
        </tr>
      </tbody>
      
      {showHistory && (
        <>
          <table className="pay-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Pay</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((ele, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{emiLocal}</td>
                  <td>{ele}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setShowHistory(false)} className="hide-history">Hide</button>
        </>
      )}
    </>
  );
};

export default EMIHistoryItem;
