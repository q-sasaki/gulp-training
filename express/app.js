const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.send("hello express!")
})

app.get("/messages", (req, res) => {
  res.send("hello sasaki!")
})

app.get("/api/messages", (req, res) => {
  const messageLists = {
    1: "aaa",
    2: "bbb",
    3: "ccc",
    4: "ddd"
  }

  res.json(messageLists)
})

app.listen(port, () => {
  console.log(`At http://localhost:${port}`);
})