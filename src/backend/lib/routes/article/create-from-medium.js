module.exports = {
    method: 'POST',
    path: '/create-from-medium',
    options: {
        // TODO add joi
        handler: async (request, h) => {
            const { Article } = request.server.app.Database;
            Article.createWithTags(JSON.parse(request.payload));
            return { msg: 'OK' };
        },
    },
};
