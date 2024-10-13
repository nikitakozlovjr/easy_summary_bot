import getUrls from "../utils/getUrls.js";

const urlAnswer = async (ctx) => {
    const { text } = ctx.message
    const urls = getUrls(text);
    await ctx.reply(urls);
};

export default urlAnswer;