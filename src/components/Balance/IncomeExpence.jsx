import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { TransactionsContext } from "../../context/Transaction/TransactionState";
import "./style.css";

export const IncomeExpence = () => {
  const { transactions } = useContext(TransactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="incomeExpence">
        <div className="box">
          <Icon
            icon="akar-icons:arrow-up"
            style={{ color: "#00ab1c", width: "22px", height: "22px" }}
          />
          <div>
            <h3>Income</h3>
            <h2>₹{income} </h2>
          </div>
        </div>
        <div className="box">
          <Icon
            icon="akar-icons:arrow-down"
            style={{ color: "#ff5959", width: "22px", height: "22px" }}
          />
          <div>
            <h3>Expense</h3>
            <h2>₹ {expense}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
