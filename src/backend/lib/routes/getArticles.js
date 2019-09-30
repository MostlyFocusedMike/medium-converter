module.exports = {
    method: 'GET',
    path: '/articles',
    options: {
        handler: async (request, h) => {
            const { Article } = request.server.app.Database;
            const article = await Article.all();
            console.log('article: ', article);
            const articles = {msg: 'ok'};
            return articles;
        },
    },
};
