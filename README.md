Express + Telegram + NodeJS

###How to run?

1. Run server:
```
node src/server/index.js
```

2. Update SERVER_URL in .env (using [ngrok](https://dashboard.ngrok.com/get-started/setup))
3. Set/unset webhook mode using
```
node src/index.js
```
4. Send message to your telegram bot, and check server's logs:
```
listen port 3000
POST request was received {
  update_id: 63271024,
  message: {
    message_id: 1140,
    from: {
      id: 421517371,
      is_bot: false,
      first_name: 'Gybber',
      username: 'Gybber',
      language_code: 'en'
    },
    chat: {
      id: 421517371,
      first_name: 'Gybber',
      username: 'Gybber',
      type: 'private'
    },
    date: 1660491753,
    text: 'asd'
  }
}
```