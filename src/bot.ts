import { Bot } from 'grammy';
import * as process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const run = async () => {
  const { TOKEN } = process.env;
  if (TOKEN) {
    const bot = new Bot(TOKEN);
    bot.command('start', ctx => ctx.reply('Started!'));

    /** COMMANDS **/
    /* https://grammy.dev/guide/commands.html#usage */

    // set commands set for your bot
    await bot.api.setMyCommands([
      { command: 'start', description: 'Start the bot' },
      { command: 'help', description: 'Show help text' },
      { command: 'settings', description: 'Open settings' },
    ]);

    // define command's arguments
    bot.command('add', (ctx) => {
      // `item` will be "apple pie" if a user sends "/add apple pie".
      const args = ctx.match;
      console.log('you sent command "add" with the following arguments', args);
    });
    await bot.start();
  }
};

run();
