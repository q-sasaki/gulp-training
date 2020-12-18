const express = require("express")
const app = express()
const port = 8081
const messageLists = require("./example.json")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const UserAgentChecker = (req, res, next) => {
  if (!req.get('User-Agent')) {
    return res.status(401).send(`User-Agent is empty`)
  }

  next()
}

const VoteChecker = (req, res, next) => {
  const result = req.get('X-Presidential-Vote')

  if (result === 'Trump') {
    app.use(express.static('dist/html/trump'))
  } else if (result === 'biden') {
    app.use(express.static('dist/html/biden'))
  } else {
    app.use(express.static('dist/html'))
  }
  next()
}

app.use(UserAgentChecker)
app.use(VoteChecker)

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
    return res.status(401).send("Authentication Failure")
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