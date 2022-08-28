import { Bot } from 'grammy';
import * as process from 'process';
import dotenv from 'dotenv';

dotenv.config();
const { TOKEN } = process.env;

if (TOKEN) {
  const bot = new Bot(TOKEN);

  bot.command('start', ctx => ctx.reply('Started!'));

  /* FILTER QUERIES */
  // bot.on('message::url', (ctx) => ctx.reply('url2'));
  // bot.on('message:text', (ctx) => ctx.reply('Text!'));
  // bot.on('message:photo', (ctx) => ctx.reply('photo!'));
  // bot.on('edit', ctx => ctx.reply('edited')); // any message or channel post edit

  // combine with OR
  bot.on(['::email', '::url'], ctx => ctx.reply('email or url'));
  // combine with AND
  bot.on(':photo').on('::hashtag', ctx => ctx.reply('Matches photos that contain a hashtag in a photo\'s caption'));

  // Filtering by User Properties
  bot.on('message').filter(
      async (ctx) => {
        const user = await ctx.getAuthor();
        console.log(user);
        return user.status === 'creator' || user.status === 'administrator';
      },
      async (ctx) => {
        // Handles messages from creators and admins.
        await ctx.reply('Hello, my master!');
      },
  );

  bot.start();
}
