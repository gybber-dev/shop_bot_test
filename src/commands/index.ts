import { InlineKeyboard } from 'grammy';
import bot, { WEB_APP_URL } from '../bot';

const commands = () => {
	const inlineKeyboard = new InlineKeyboard()
		.webApp('Order', WEB_APP_URL).row();

	bot.command('start', async (ctx) => {
		await ctx.reply('Welcome! Click button to make an order', {
			reply_markup: inlineKeyboard,
		});
	});

// Wait for click events with specific callback data.
	bot.callbackQuery('order-payload', async (ctx) => {
		await ctx.answerCallbackQuery({
			text: 'run web app',
		});
	});
};

export default commands;
