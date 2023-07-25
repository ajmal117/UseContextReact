import React, { createContext } from "react";
import CompA from "./CompA.jsx";
// import CompB from "./CompB.jsx";
// import CompC from "./CompC.jsx";

const FirstName = createContext();
const LastName = createContext();

function Prt() {
  return (
    <>
      <FirstName.Provider value={"Ajmal"}>
        <LastName.Provider value={"Ali"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default Prt;
export { FirstName,LastName };
