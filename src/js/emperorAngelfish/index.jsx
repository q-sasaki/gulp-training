import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./sample.jsx"

const Index = () => {
  return (
    <>
      <MyComponent />
      <h1>Another Page</h1>
      <a href="./index.html">Topページへ</a>
      <img src="../images/emperorAngelfish.png" />
    </>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('reactApp')
)