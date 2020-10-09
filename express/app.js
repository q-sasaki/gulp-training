const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.send("hello express!")
})

app.get("/messages", (req, res) => {
  res.send("hello sasaki!")
})

app.listen(port, () => {
  console.log(`At http://localhost:${port}`);
})