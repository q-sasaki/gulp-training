# infra-training
infra練習用リポジトリ

## Available pages
- TOP(/) : Show a cute sunfish!
- Messages(/messages) : Show some messages.
- Message(/messages?key=3) : Show 3th message.

## API
### messages
- GET /api/messages

### message
- GET /api/messages/:messageId
- POST /api/messages/:messageId

## Usage
### dev
Running development server with auto-rebuilding:
```
$ npm run start:dev
```

### prod
Generate minified bundle without starting server:
```
$ npm run start:prod
```