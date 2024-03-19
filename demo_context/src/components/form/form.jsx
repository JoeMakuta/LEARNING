import React from "react";
import "./form.css";
import Theme from "../theme/theme";

const Form = () => {
  return (
    <div className="char-input-container">
      <h2 className="char-input-header">It's nice to meet you.</h2>
      <p className="char-input-paragraph">What can we help with?</p>
      <textarea id="text-input" placeholder="Start typing here"></textarea>
      <div id="character-count">
        <span className="character-text">Characters remaining:</span>
        <span className="character-number">500</span>
      </div>
      <Theme></Theme>
    </div>
  );
};

export default Form;
