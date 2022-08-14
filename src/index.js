import {api} from "./services/index.js";

const { SERVER_URL } = process.env

/** Telegram bot config */

const main = async () => {
    console.log('BOT INFO')
    await api('getMe')
    console.log('BOT webhook info')
    await api('getWebhookInfo')
    console.log('BOT webhook set')
    await api('setWebhook', {
        url: SERVER_URL,
        drop_pending_updates: true,
    })
    // console.log('BOT delete webhook mode')
    // await api('deleteWebhook')
    console.log('BOT webhook info')
    await api('getWebhookInfo')
}

console.log(main())
