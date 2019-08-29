const Article = require('../../models/article');
const Tag = require('../../models/tag');
const Comment = require('../../models/comment');

exports.seed = async (knex) => {
    await knex('tags').del();
    await knex('articles').del();

    // multiple create (all objects, even relationships must be new)
    await Article.create([
        {
            title: 'I am the first article',
            content: 'Look I am the content on the first article',
            tags: [
                {
                    name: 'beginners',
                },
            ],
            comments: [
                {
                    content: 'cool article',
                },
            ],
        },
        {
            title: 'It is I, the second article',
            content: 'lo and behold, the content for the second article',
            tags: [
                {
                    name: 'advanced',
                },
                {
                    name: 'fun',
                },
            ],
        },
    ]);

    // single create
    const article3 = await Article.create({
        title: 'The third article is here',
        content: 'My content is nicest because it is thrice-est',
        tags: [{
            name: 'neat',
        }],
    });

    // access created objects for after the fact relation building
    const jsTag = await Tag.create({ name: 'js' });
    await article3.addRelations('tags', jsTag);
    const articles = await Article.all();

    const comment = await Comment.findBy('content', 'cool article');
    comment.addRelations('article', article3);
    // see what was made
    for (let i = 0; i < articles.length; i++) {
        console.log('\narticle: ', articles[i]);
        const tags = await articles[i].listRelations('tags'); // eslint-disable-line no-await-in-loop
        console.log('tags: ', tags);
    }
};
