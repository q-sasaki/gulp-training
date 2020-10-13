# infra-training
infra練習用リポジトリ

### Available pages
- TOP(localhost:8080) : Show a cute sunfish!
- Messages(localhost:8080/messages) : Show some messages.
- Message(localhost:8080/messages?key=3) : Show 3th message.

### Usage
① If you want to get ready for development, this command:

```
$ npm run start:dev
```
It contains 3 gulp commands.
* gulp clean
* gulp copy
* gulp watch

<br>
② If you want to get ready for production, this command:

```
$ npm run start:prod
```

It contains 2 gulp commands.
* gulp clean
* gulp build
