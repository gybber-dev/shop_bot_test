// Your plugin can have one main function that creates middleware
import { Context, Middleware } from 'grammy';

/** Plugin detect if userName contains the str */

export function onlyAccept<C extends Context>(str: string): Middleware<C> {
	// Create and return middleware.
	return async (ctx, next) => {
	// Get first name of user.
		const name = ctx.from?.first_name;
		// Let through all matching updates.
		if (name === undefined || name.includes(str)) {
			// Pass on control flow to downstream middleware.
			await next();
		} else {
			// Tell them we don't like them.
			await ctx.reply(`I'm not talking to you! You don't care about ${str}!`);
		}
	};
}
