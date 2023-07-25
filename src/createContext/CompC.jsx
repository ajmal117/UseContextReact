import React from "react";
import { FirstName, LastName } from "./Prt";

function CompC(props) {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <>
              <LastName.Consumer>
                {(lName) => {
                  return (
                    <>
                      <h1>
                        This is {fName} {lName}
                      </h1>
                    </>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default CompC;
