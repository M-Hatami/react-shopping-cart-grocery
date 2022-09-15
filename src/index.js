import React from "react";
import ReactDOM from "react-dom/client";
/* import './index.css'; */
import GroceryCart from "./GroceryCart";
import PersonalPizza from "./PizzaShop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GroceryCart />
    <br></br>
    <hr></hr>
    <PersonalPizza />
  </React.StrictMode>
);
