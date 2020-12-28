import React from "react";
import btnClick from "./click"

const sunfish = () => {
  return (
    <>
      <h1 id="topHeading">Top Page</h1>
      <button id="button" onClick={btnClick}>クリック！！！</button>
      <img src="../images/sunfish.png" />
    </>
  )
}

export default sunfish