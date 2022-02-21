import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../context/Transaction/TransactionState";
import "./style.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionsContext);

  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [msg, setMsg] = useState("");

  // var dateStyle;
  // const checkDate = () => {
  //   if (date === "") {
  //     dateStyle = {
  //       color: "rgb(155, 155, 155)",
  //     };
  //   } else {
  //     dateStyle = {
  //       color: "red",
  //     };
  //   }
  // };
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000 + 1),
      text,
      amount: +amount,
      date,
      msg,
    };
    addTransaction(newTransaction);

    setAmount(0);
    setText("");
    setDate("");
    setMsg("");
  };

  return (
    <>
      <div className="form-container blue-glassmorphism">
        <form className="form" onSubmit={onSubmit}>
          <input
            placeholder="Text..."
            name="Text"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="white-glassmorphism"
          />
          <input
            placeholder="Date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="white-glassmorphism "
          />
          <input
            placeholder="Amount"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="white-glassmorphism"
          />
          {/* <input
            placeholder="Keyword (GIF)"
            name="Keyword"
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            className="white-glassmorphism"
          /> */}
          <input
            placeholder="Message"
            name="message"
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            className="white-glassmorphism"
          />
          <p style={{ color: "white", fontSize: "11px" }}>
            Add (-) sign for Expence and (+) for Income
          </p>
          <div className="divider"></div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
