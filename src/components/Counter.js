import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // display the counter
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

// increment, decrement
// every 3 seconds
// render outside routing structure

export default Counter;
