import React from "react";
import ReactDOM from "react-dom";
import "./index"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import emperorAngelfish from "../emperorAngelfish/index.jsx"
import sunfish from "./sunfish.jsx"

const Top = () => {
  return (
    <>
      <Router>
        <div>
          <Link to="/index.html">TOPページへ</Link>
          <Link to="/another.html">別ページへ</Link>
          <Route exact path="/index.html" component={sunfish} />
          <Route exact path="/another.html" component={emperorAngelfish} />
        </div>
      </Router>
    </>
  )
}

ReactDOM.render(
  <Top />,
  document.getElementById('root')
)