import React from "react";
import ReactDOM from "react-dom";
import Sample2Wrap from "./sample2Wrap.jsx"

const MyComponent = () => {
  return (
    <>
      <div>hello!</div>
      <Sample2Wrap />
    </>
  )
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('reactApp')
)