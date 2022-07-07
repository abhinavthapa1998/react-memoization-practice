import { memo, useMemo, useState } from "react";
import "./styles.css";

const Block = ({ changeObject }) => {
  console.log("Block Rendered");
  const value = changeObject?.val;
  console.log(value);
  return (
    <div
      style={{ width: 300, height: 300, background: value ? "red" : "blue" }}
    ></div>
  );
};

const MemoizedBlock = memo(Block);

export default function App() {
  const [change, setChange] = useState(false);
  // const [changeObject, setChangeObject] = useState({ val: false });
  const memoizedResult = useMemo(() => {
    return assign(change);
  }, [change]);

  function assign(value) {
    return {
      val: value
    };
  }

  return (
    <div className="App">
      <h2>React Memoization Practice</h2>
      <button onClick={() => setChange(true)}>SET</button>
      <button onClick={() => setChange(!change)}>TOGGLE</button>
      <MemoizedBlock changeObject={memoizedResult} />
    </div>
  );
}
