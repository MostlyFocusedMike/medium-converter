const Article = require('../../models/article');
const Tag = require('../../models/tag');

exports.seed = async (knex) => {
    await knex('tags').del();
    await knex('articles').del();

    await Article.create([
        {
            title: 'I am the first article',
            content: 'Look I am the content on the first article',
            tags: [ // notice that this is plural
                {
                    name: 'beginners',
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
            ],
        },
    ]);

    const jsTag = await Tag.create(
        {
            name: 'js',
        },
    );
    const article3 = await Article.create({
        title: 'The third article is here',
        content: 'My content is nicest because it is thrice-est',
    });

    const art3 = await Article.findBy('title', 'The third article is here')
    const art2 = await Article.findBy('title', 'It is I, the second article')
    console.log('art3: ', art3);
    await art3.$relatedQuery('tags').relate(jsTag.id);

    const tags = await art3.listTags();
    const tags2 = await art2.listTags();
    console.log('tags: ', tags);
};
