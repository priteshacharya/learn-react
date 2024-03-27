import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <div>You have clicked {count} times</div>
    </div>
  );
};

export default Counter;
