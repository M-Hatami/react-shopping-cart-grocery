import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";
import "./GroceryCart.css";
import Basket from "./basket-shopping-solid.svg";
import Cross from "./xmark-solid.svg";

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1 id="top" className="pageTitle">
        زنبیل خواروبار/بقالی
      </h1>
      <img
        src={Basket}
        style={{ height: 32, width: 32, marginRight: 25 }}
        alt="زنبیل خرید"
      />
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item} {<img src={Cross} style={{ height: 14, width: 14 }} />}
          </li>
        ))}
      </ul>
      <h2>میوه و سبزی</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>اطعمه</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
