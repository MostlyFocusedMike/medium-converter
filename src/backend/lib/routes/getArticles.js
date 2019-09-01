module.exports = {
    method: 'GET',
    path: '/get-articles',
    options: {
        handler: async (request, h) => {
            return { msg: 'get-articles' };
        },
    },
};