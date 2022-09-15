import React, { useState } from "react";
import Pizza from "./pizza-slice-solid.svg";

const options = ["فلفل دلمه", "سوسیس", "گوشت تُرد", "آناناس"];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({ target }) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter((t) => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      <div>
        <h1 id="top" className="pageTitle">
          لقمه آماده
        </h1>
        <img
          src={Pizza}
          style={{ height: 32, width: 32, marginRight: 25 }}
          alt="کش‌لقمه"
        />
      </div>
      <div>
        {options.map((option) => (
          <button value={option} onClick={toggleTopping} key={option}>
            {selected.includes(option) ? (
              <span style={{ color: "red", fontWeight: 600 }}>- </span>
            ) : (
              <span style={{ color: "green", fontWeight: 600 }}>+ </span>
            )}
            {option}
          </button>
        ))}
        <p>درخواست یک لقمه {selected.join("، ")}</p>
        {/*         {options.map((option) => (
          <button value={option} onClick={toggleTopping} key={option}>
            {selected.includes(option) ? "Remove " : "Add "}
            {option}
          </button>
        ))}
        <p>Order a {selected.join(", ")} pizza</p> */}
      </div>
    </div>
  );
}
