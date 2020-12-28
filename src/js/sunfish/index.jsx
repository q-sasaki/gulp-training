import React from "react";
import ReactDOM from "react-dom";
import btnClick from "./click"
import "./index"

const Top = () => {
  return (
    <>
      <h1 id="topHeading">Top Page</h1>
      <a href="./another.html">別ページへ</a>
      <button id="button" onClick={btnClick}>クリック！！！</button>
      <img src="../images/sunfish.png" />
    </>
  )
}

ReactDOM.render(
  <Top />,
  document.getElementById('root')
)