const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.send("hello express!")
})

app.listen(port, () => {
  console.log(`At http://localhost:${port}`);
})