// react
import React, { useContext } from "react";
// components
import { TrasactionCard } from "../components";
//context
import { TransactionsContext } from "../context/Transaction/TransactionState";
// styles
import { Section, H1, TrasactionHistory } from "./style";

const LatestTrans = () => {
  const { transactions } = useContext(TransactionsContext);

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    marginBottom: "80px",
  };
  return (
    <>
      <Section>
        <div style={style}>
          <H1>Latest Transaction</H1>
          <TrasactionHistory>
            {transactions.reverse().map((transaction) => {
              return <TrasactionCard key={transaction.id} {...transaction} />;
            })}
          </TrasactionHistory>
        </div>
      </Section>
    </>
  );
};

export default LatestTrans;
