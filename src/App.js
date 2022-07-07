import { memo, useState } from "react";
import "./styles.css";

const Block = (change) => {
  console.log("Block Rendered");
  return (
    <div
      style={{ width: 300, height: 300, background: change ? "red" : "blue" }}
    ></div>
  );
};

const MemoizedBlock = memo(Block);

export default function App() {
  const [change, setChange] = useState({ val: false });
  return (
    <div className="App">
      <h2>React Memoization Practice</h2>
      <button onClick={() => setChange({ val: true })}>SET</button>
      <MemoizedBlock change={change} />
    </div>
  );
}
