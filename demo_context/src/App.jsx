import React, { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <main className={theme == "light" ? "light-mode" : "dark-mode"}>
      <h1>DEMO : REACT_CONTEXT</h1>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
    </main>
  );
}

export default App;
