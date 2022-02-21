import { Home, About } from "./pages";
import NormalizeStyle from "./global/NormalizeStyle";
import { TransactionsProvider } from "./context/Transaction/TransactionState";

export const App = () => {
  return (
    <TransactionsProvider>
      <NormalizeStyle />
      <Home />
    </TransactionsProvider>
  );
};
