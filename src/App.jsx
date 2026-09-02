import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="counter-card">
        <h1> My Counter</h1>

        <p className="subtitle">Simple React Counter</p>

        <div className="count">{count}</div>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>
            −
          </button>

          <button onClick={() => setCount(0)} className="reset">
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>

        <p className="message">
          {count === 0
            ? "Start counting "
            : count > 0
            ? "You're going up! "
            : "Going down! "}
        </p>
      </div>
    </div>
  );
}

export default App;