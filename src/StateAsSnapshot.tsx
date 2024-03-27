import React, { useState } from "react";

const StateAsSnapshot = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <p>https://react.dev/learn/state-as-a-snapshot</p>
      <p>A state variable’s value never changes within a render</p>
      <p>
        React waits until all code in the event handlers has run before
        processing your state updates
      </p>
    </>
  );
};

export default StateAsSnapshot;
