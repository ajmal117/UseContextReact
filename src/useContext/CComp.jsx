import React from "react";
import { CounterContext } from "./CounterContext";

class CComp extends React.Component {
  render() {
    return (
      <div className="my-4">
        <h1>Class Component</h1>

        <CounterContext.Consumer>
          {(value) => {
            const { counter, setCounter } = value;
            return (
              <>
                <h1>{counter}</h1>
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
              </>
            );
          }}
        </CounterContext.Consumer>
      </div>
    );
  }
}
export default CComp;
