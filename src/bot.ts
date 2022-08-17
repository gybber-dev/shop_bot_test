import { Bot } from 'grammy';
import * as process from 'process';
import dotenv from 'dotenv';

dotenv.config();
const { TOKEN } = process.env;

if (TOKEN) {
  const bot = new Bot(TOKEN);
  bot.command('start', ctx => ctx.reply('Started'));

  bot.on('message', ctx => ctx.reply('Got message'));
  console.log('start the bot');
  bot.start();
}
