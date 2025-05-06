import { useState } from "react";

export default function App() {

  const increment = () => {
    setCount(count + 1);
    console.log('Count is now: ', count);
  };

const [count, setCount]= useState(0);
  return(
    <div className="main">
      <h1>{count}</h1>
      <button className="button-main" onClick={increment}>+</button>
      
    </div>
  );
}

