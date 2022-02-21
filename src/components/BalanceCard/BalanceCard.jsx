import React from "react";
import { IncomeExpence } from "../Balance/IncomeExpence";
import { TotalBalance } from "../Balance/TotalBalance";
import "./style.css";

const BalanceCard = () => {
  return (
    <>
      <div className="balanceCard">
        <TotalBalance />
        <IncomeExpence />
      </div>
    </>
  );
};

export default BalanceCard;
