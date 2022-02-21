import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { Icon } from "@iconify/react";
import { TransactionsContext } from "../../context/Transaction/TransactionState";
import "./style.css";

const TransactionCard = ({ id, text, amount, msg, date }) => {
  const { deleteTransaction } = useContext(TransactionsContext);
  const gifUrl = useFetch({ text });
  const sign = amount < 0 ? "-" : "+";

  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <>
      <div className="trasaction-card">
        <div className="transaction-content">
          <div style={style}>
            {amount < 0 ? (
              <p className="transaction-tag expense-color ">Expence</p>
            ) : (
              <p className="transaction-tag income-color">Income</p>
            )}
            <button className="cross-btn" onClick={() => deleteTransaction(id)}>
              <Icon icon="akar-icons:cross" />
            </button>
          </div>
          <p className="text">Text: {text}</p>
          <p className="amount">
            Amount: {sign}₹{Math.abs(amount)}
          </p>
          {msg && (
            <>
              <p className="msg">Message: {msg}</p>
            </>
          )}
          <div className="date-container">
            <p className="date">Date: {date}</p>
          </div>
          <img src={gifUrl} alt="gif" className="gif" />
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
