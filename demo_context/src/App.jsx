import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Theme from "./components/theme/theme";
import { ThemeContext } from "./context/index";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main className={theme == "light" ? "light-mode" : "dark-mode"}>
        <Form />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
