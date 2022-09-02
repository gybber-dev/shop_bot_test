import { config } from 'dotenv';
config();

import bot, { init } from './bot';
import commands from './commands';

const main = async () => {
	await init();
	commands();
	await bot.start();
};

main();
