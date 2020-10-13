const express = require("express")
const app = express()
const port = 8080
const messageLists = require("./example.json")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const UserAgentChecker = (req, res, next) => {
  if (!req.get('User-Agent')) {
    res.status(401).send(`User-Agent is empty`)
  }

  next()
}

app.use(UserAgentChecker)

app.use(express.static('dist'))
app.use(express.static('dist/html'))

app.get("/messages", (req, res) => {
  const message = messageLists[req.query.key]
  if (message) {
    res.send(`Message of your choice is ${message}`)
  } else {
    res.send(`
      This is messages page!!
      <br>
      All messages are ${Object.values(messageLists)}
    `)
  }
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
    res.status(401).send("You are failing to authenticate")
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
  console.log(`At http://localhost:${port}`)
})