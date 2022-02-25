import React, { useState } from "react";
import "./EMI Styles/EMIcalculator.css";
import EMIHistory from "./EMI History/EMIHistory";
import EMIinputs from "./EMIinputs";
import EMITable from "./EMI Table/EMITable";

const EMIcalculator = (props) => {
  const [p, setP] = useState("");
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  const [emi, setEMI] = useState("");
  const [table, setTable] = useState(false);
  const [history, setHistory] = useState([]);

  let balance = emi * n;
  const arr = [];

  for (let i = 1; i <= n; i++) {
    balance -= emi;
    arr.push(balance);
  }

  const handleCalEMI = () => {
    const si = (p * (n / 12) * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = Math.ceil(repayAmount / n);
    setEMI(emiLocal);
    setTable(true);
    const data = {
      principle: p,
      months: n,
      interest: r,
      emi: emi,
    };

    setHistory((prevHistory) => {
      if (history.length < 10) {
        return [data, ...prevHistory];
      } else {
        return [data];
      }
    });
  };

  return (
    <div>
      <div className="calc">
        <div className="header">
          <h1>EMI Calculator</h1>
          <button onClick={() => props.onLogOut()} className="logout-btn">
            Log Out
          </button>
        </div>
        <EMIinputs
          setedN={setN}
          setedR={setR}
          setedP={setP}
          emiHandeler={handleCalEMI}
        />
        <h1>EMI :{emi}</h1>
      </div>
      <br />
      <div className="heads">
        <h3 className="total">Total: {emi * n}</h3>
        <h3 className="total-intereset">Total-Interest: {emi * n - p}</h3>
        <h3 className="history-head">History</h3>
        <button className="clear-history" onClick={() => setHistory([])}>
          Clear History
        </button>
      </div>
      <div className="tabs">
        <EMITable table={table} arr={arr} EMI={emi} />
        <EMIHistory history={history} />
      </div>
    </div>
  );
};

export default EMIcalculator;
