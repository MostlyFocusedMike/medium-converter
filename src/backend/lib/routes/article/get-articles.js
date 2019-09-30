module.exports = {
    method: 'GET',
    path: '/articles',
    options: {
        handler: async (request, h) => {
            const { Article } = request.server.app.Database;
            return Article.all();
        },
    },
};
