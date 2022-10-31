import React from "react";
import ReactDOM from "react-dom/client";
import { getName } from "./get";

const title = "Webbrain Academy";
const ar = [1, 2, 3, 4, 5];
const obj = { name: "webbrain", title: "IT" };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hi {title} , hey</h1>
    <h1>{ar}</h1>
    <div>
      <h1>{obj.name}</h1>
    </div>
  </React.StrictMode>
);
