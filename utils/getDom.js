import axios from 'axios';

const getDom = async (urls) => {
    const doms = await urls.map(async (url) => {
        const { data } = await axios.get(url);
        return data;
    });
    return doms;
};

export default getDom;