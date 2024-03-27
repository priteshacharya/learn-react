import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextExample() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme from context: {theme}</h1>
    </div>
  );
}

export default ContextExample;
