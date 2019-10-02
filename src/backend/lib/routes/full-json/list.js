module.exports = {
    method: 'GET',
    path: '/full-json',
    options: {
        handler: async (request, h) => {
            const { Article } = request.server.app.Database;
            return Article.getArticlesWithTags();
        },
    },
};