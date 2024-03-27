import React, { useState } from "react";

const QueueingEvent = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
      <p>
        Here, n {"=>"} n + 1 is called an updater function. When you pass it to
        a state setter: React queues this function to be processed after all the
        other code in the event handler has run. During the next render, React
        goes through the queue and gives you the final updated state.
      </p>
    </>
  );
};

export default QueueingEvent;
