import { Bot } from 'grammy';
import * as process from 'process';
import dotenv from 'dotenv';
import { onlyAccept } from './mwPlugin';

dotenv.config();

const run = async () => {
	const { TOKEN } = process.env;
	if (TOKEN) {
		const bot = new Bot(TOKEN);

	/** PLUGINS **/
	/* https://grammy.dev/plugins/guide.html#designing-a-dummy-middleware-plugin */

	// There are 2 type of plugins: middlewares and transformer plugins.
	// The first ones are a listener. Seconds transform some data

	// Using middleware plugin. It detects if user's name contain the following string "grammY'
		bot.use(onlyAccept('grammY'));

		bot.on('message', ctx => ctx.reply('You passed the middleware plugin'));

		await bot.start();
	}
};

run();
