import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FComp() {
  const { counter } = useContext(CounterContext);
  return (
    <div className="my-4">
      <h1>Functional Component</h1>
      <h1>{counter}</h1>
      <Fchild />
    </div>
  );
}

const Fchild = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="border inline-block p-3">
      <h1>Function Child Component</h1>
      <h1>{counter}</h1>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="m-2 p-1 bg-blue-300 text-slate-950 rounded-md">
          Increament
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          className="m-2 p-1 bg-green-300 text-slate-950 rounded-md">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default FComp;
