import process from 'process';
import { Bot } from 'grammy';

export const { TOKEN = '', WEB_APP_URL = '' } = process.env;

if (!TOKEN) throw new Error('TOKEN must be provided!');
if (!WEB_APP_URL) throw new Error('WEB_APP_URL must be provided!');

const bot = new Bot(TOKEN);

export const init = async () => {
	await bot.api.setMyCommands([
		{ command: 'start', description: 'Open the catalog' },
	]);
};

export default bot;
