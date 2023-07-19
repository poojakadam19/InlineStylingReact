import React from "react";
import ReactDom from "react-dom";

const name = "Pooja kadam";
const currentdate = new Date(2023, 7, 19);
const year = currentdate.getFullYear();

const img = "https://picsum.photos/200/300";

const style = {
  color: "blue",
  font: "20px",
  border: "1px solid black"
};

style.color = "black";

ReactDom.render(
  <div>
    <p style={{ color: "red" }}> Created by {name} </p>
    <h1 style={style}> Copyright {year} </h1>

    <ul>
      <li>Mango</li>
      <li>Banana</li>
      <li>Orange</li>
      <li>Grapes</li>
    </ul>
    <img src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
