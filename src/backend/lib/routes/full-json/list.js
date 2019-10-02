module.exports = {
    method: 'GET',
    path: '/full-json',
    options: {
        handler: async (request, h) => {
            const { Article, Tag } = request.server.app.Database;
            return {
                articles: await Article.getArticlesWithTags(),
                tags: await Tag.all(),
            };
        },
    },
};