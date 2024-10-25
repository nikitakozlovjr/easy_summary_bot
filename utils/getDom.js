import axios from 'axios';

const getDom = async (urls) => {
    const promises = urls.map(async (url) => {
        try {
            const { data } = await axios.get(url);
            return { status: 'succes', data};
        }  catch (_e) {
            return { 
                status: 'error', 
                data: `Не отправить запрос к сайту ${url}. Убедитель в корректности ссылки`
            };
        }
    });

    const results = await Promise.all(promises)
    return results;
};

export default getDom;