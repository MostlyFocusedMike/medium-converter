const Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/articles',
    options: {
        validate: {
            query: {
                tags: Joi.boolean().optional().description('Whether or not you want tags included with each article'),
            },
        },
        handler: async (request, h) => {
            const { Article } = request.server.app.Database;
            if (request.query.tags) return Article.getArticlesWithTags();
            return Article.all();
        },
    },
};
