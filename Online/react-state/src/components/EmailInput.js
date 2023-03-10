import React from "react";
import { useState } from "react";
const EmailInput = () => {
  const [error, setError] = useState(true);
  const evaluateEmail = (e) => {
    const enteredEmail = e.target.value;
    if (enteredEmail.trim() === "" || enteredEmail.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
      {error && <p>Your email is wrong</p>}
    </div>
  );
};

export default EmailInput;
