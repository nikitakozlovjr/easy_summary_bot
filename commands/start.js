import fsp from 'node:fs/promises';
import path from 'node:path';

const startRequest = async (ctx) => {
    const content = await fsp.readFile(path.join('.', 'contents', 'start.txt'), 'utf-8');
    await ctx.reply(content);
};

export default startRequest;