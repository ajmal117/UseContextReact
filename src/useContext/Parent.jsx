import React, { useState } from "react";
import FComp from "./FComp";
import CComp from "./CComp";
import { CounterContext } from "./CounterContext";

function Parent(props) {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(counter + 1);
  };
  const handleDec = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="border-2 text-center bg-slate-600 text-slate-200">
        <div className="p-3 ">
          <h1>Parent Component 😄</h1>
          <h2>{counter}</h2>
          <div>
            <button
              onClick={handleInc}
              className="m-2 p-1 bg-blue-300 text-slate-950 rounded-md">
              Increament 👍
            </button>
            <button
              onClick={handleDec}
              className="m-2 p-1 bg-green-300 text-slate-950 rounded-md">
              Decrement 👎
            </button>
          </div>
        </div>
        <hr />
        <CounterContext.Provider value={{ counter, setCounter }}>
          <FComp />
          <hr />
          <CComp />
        </CounterContext.Provider>
      </div>
    </>
  );
}

export default Parent;
