const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.send("hello express!")
})

app.get("/messages", (req, res) => {
  res.send("hello sasaki!")
})

const messageLists = {
  1: "aaa",
  2: "bbb",
  3: "ccc",
  4: "ddd"
}

// メッセージだけなら、配列だとよりシンプルかも → 配列の場合は-1する
// const messageLists = [
//   "aaa",
//   "bbb",
//   "ccc",
//   "ddd"
// ]

app.get("/api/messages", (req, res) => {
  res.json(messageLists)
})

app.get("/api/messages/:messageId", (req, res) => {
  res.send(messageLists[req.params.messageId])
})

app.listen(port, () => {
  console.log(`At http://localhost:${port}`);
})