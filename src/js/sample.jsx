import React from "react";
import ReactDOM from "react-dom";
import Sample2 from "./sample2.jsx"

const MyComponent = () => {
  return (
    <>
      <div>hello!</div>
      <Sample2 />
    </>
  )
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('reactApp')
)