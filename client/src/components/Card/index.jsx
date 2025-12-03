import { useState } from "react";

import './index.css'
function Card({ cardType, amount, setAmount }) {
  const [isInEdit, setIsInEdit] = useState(false);
  const [moneyInput, setMoneyInput] = useState(amount);
  const changeAmount = (e) => {
    if (cardType == "Income") {
      setIsInEdit(true);
    }
  };
  const onSubmition = (e) => {
    e.preventDefault();
    setIsInEdit(false);
    setAmount((c) => ({
      ...c,
      income: moneyInput,
    }));
  };
  console.log(amount);
  return (
    <div className={`m-3 border px-4 py-2 rounded ${cardType==='Income'? 'income':'expense'}`}>
      <div className="d-flex  justify-content-between align-items-center w-100">
        <p className="fs-5 fw-bold">{cardType}</p>
        { (!isInEdit && cardType==='Income') && (
          <button onClick={changeAmount} className="btn mx-3 fs-6">
            <span className="material-symbols-outlined fs-5">edit</span>
          </button>
        )}
      </div>
      {isInEdit ? (
        <form onSubmit={onSubmition}>
          <input
          className="form-control"
            onChange={(e) => setMoneyInput(e.target.value)}
            value={moneyInput}
            placeholder="Enter Amount"
          />
          <input type="submit" className="form-control my-2 " />
        </form>
      ) : (
        <p className="fs-4">₹ {amount}</p>
      )}
    </div>
  );
}

export default Card;
