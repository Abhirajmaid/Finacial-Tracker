import React, { useContext } from "react";
import { TransactionsContext } from "../../context/Transaction/TransactionState";

export const TotalBalance = () => {
  const { transactions } = useContext(TransactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div className="total-balance">
        <h3>Total Balance</h3>
        <h2>₹{total}</h2>
      </div>
    </>
  );
};
