import React from "react";
import CompB from "./CompB";
import { FirstName } from "./Prt";

function CompA(props) {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <>
              <h1>This is an Intro of {fName}</h1>
            </>
          );
        }}
      </FirstName.Consumer>
      <CompB />
    </>
  );
}

export default CompA;
