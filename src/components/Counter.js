import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // // display the counter
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 3000);
  // });

  useEffect(() => {
    const countProcess = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
    return () => clearInterval(countProcess);
  });

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
      <Button onClick={() => setCount((count) => count - 1)}>Decrement</Button>
    </div>
  );
}

export default Counter;
