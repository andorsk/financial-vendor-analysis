import React, { useEffect } from "react";
import "./App.css";
import AccountTable from "./components/AccountTable";

function App() {
  useEffect(() => {
    document.title = "YBR";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Banking Account Data</h1>
      </header>
      <AccountTable />
    </div>
  );
}

export default App;
