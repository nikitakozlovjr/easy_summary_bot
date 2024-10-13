import * as env from 'dotenv';
import { Bot, InlineKeyboard } from "grammy";
import startCommandAnswer from './commands/start.js';
import infoCommands from './commands/infoCommands.js';
import urlAnswer from './on/urlAnswer.js';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { url } from 'node:inspector';

env.config();

const bot = new Bot(process.env.BOT_APY_KEY);

bot.api.setMyCommands(infoCommands)

bot.command('start', startCommandAnswer)

bot.on('::url', urlAnswer)

bot.start()