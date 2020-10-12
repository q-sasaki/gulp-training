const express = require("express")
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const messageLists = {
  1: "aaa",
  2: "bbb",
  3: "ccc",
  4: "ddd"
}

app.get("/", (req, res) => {
  res.send("hello express!")
})

app.get("/messages", (req, res) => {
  res.send(messageLists)
})

app.get("/api/messages", (req, res) => {
  res.json(messageLists)
})

app.get("/api/messages/:messageId", (req, res) => {
  res.send(messageLists[req.params.messageId])
})

app.post("/api/messages/:messageId", (req, res) => {
  // リクエストヘッダのauth-keyが正しくなければ、要求を拒否
  if ("sasaking" !== req.get("auth-key")) {
    res.status(401).send("auth-key is incorrect")
  }

  const id = req.params.messageId
  const message = req.body.message

  // リクエストボディに keyには"message"、 valueにはメッセージ内容を含める。
  // メッセージ内容が空の場合はエラー
  if(message) {
    const crud = messageLists[id] ? "edit" : "create"
    messageLists[id] = message
    res.send(`${crud} id: ${id} message ${message}`)
  } else {
    res.status(400).send(`your message is empty`)
  }
})

app.listen(port, () => {
  console.log(`At http://localhost:${port}`);
})