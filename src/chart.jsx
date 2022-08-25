
import React from "react";
import ReactDOM from "react-dom";
import Line from "./components/Line";
import Bubble from "./components/Bubble";


const components = [
  ["Line", Line],
  ["Bubble", Bubble],
 
];

export default function Chart() {
 

  return (
    <div>
      {components.map(([label, Comp]) => {
        return (
          <div key={label + ""}>
            <h1>{label}</h1>
            <div>
              <Comp />
            </div>
          </div>
        );
      })}
      <div style={{ height: "50rem" }} />
    </div>
  );
}
 