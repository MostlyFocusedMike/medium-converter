const nodeFetch = require('node-fetch');
const ArticleConverter = require('../helpers/article-converter');

module.exports = {
    method: 'GET',
    path: '/get-articles',
    options: {
        handler: async (request, h) => {
            const result = await nodeFetch('https://medium.com/@mikecronin92/latest?format=json');
            const rawText = await result.text();
            const articles = new ArticleConverter(rawText, 'mikecronin92');
            return articles;
        },
    },
};
