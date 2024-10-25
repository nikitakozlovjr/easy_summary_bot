import getUrls from "../utils/getUrls.js";
import axios from "axios";
import getDom from '../utils/getDom.js';

const urlAnswer = async (ctx) => {
    const { text } = ctx.message
    const urls = getUrls(text);
    const doms = await getDom(urls);
    console.log(doms)
    await ctx.reply(urls);
};

export default urlAnswer;