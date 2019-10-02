module.exports = {
    method: 'GET',
    path: '/full-json',
    options: {
        handler: async (request, h) => {
            const { Tag } = request.server.app.Database;
            return Tag.all();
        },
    },
};