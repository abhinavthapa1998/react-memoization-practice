import { memo, useMemo, useState } from "react";
import "./styles.css";

const Block = ({ changeObject }) => {
  console.log("re-render");
  const value = changeObject?.val;
  return (
    <div
      style={{ width: 300, height: 300, background: value ? "red" : "blue" }}
    ></div>
  );
};

const SmallBlock = ({ dummy, handler }) => {
  console.log("Small child was re-rendered");
  return <h1>Small Child</h1>;
};
const MemoizedSmall = memo(SmallBlock);
export default function App() {
  const [change, setChange] = useState(false);
  const [dummy, setDummy] = useState([]);
  // const [changeObject, setChangeObject] = useState({ val: false });
  const memoizedResult = useMemo(() => {
    return assign(change);
  }, [change]);

  function assign(value) {
    return {
      val: value
    };
  }
  const handler = () => {
    console.log(change);
  };
  return (
    <div className="App">
      <h2>React Memoization Practice</h2>
      <button onClick={() => setChange(true)}>SET</button>
      <button onClick={() => setChange(!change)}>TOGGLE</button>
      {/* <Block changeObject={memoizedResult} /> */}
      {/* <SmallBlock /> */}
      <MemoizedSmall dummy={dummy} handler={handler} />
    </div>
  );
}
