const Article = require('../../models/article');
const Tag = require('../../models/tag');

exports.seed = async (knex) => {
    await knex('tags').del();
    await knex('articles').del();

    // multiple create (all objects, even relationships must be new)
    await Article.create([
        {
            "medium_id": "16f1a7e639a0",
            "title": "Attention New Devs: Professionals Google Stuff. A Lot.",
            "slug": "attention-new-devs-professionals-google-stuff-a-lot",
            "link": "https://medium.com/@mikecronin92/attention-new-devs-professionals-google-stuff-a-lot-16f1a7e639a0",
            "image": "https://miro.medium.com/max/1400/1*_vTEr9GqtFOUmhS3Cvjp2Q.jpeg",
            "subtitle": "And that’s a good thing",
            "tags": [
                {
                    "name": "JavaScript",
                    "slug": "javascript"
                },
                {
                    "name": "Coding Bootcamp",
                    "slug": "codingbootcamp"
                }
            ]
        },
    ]);


    const articles = await Article.all();

    // see what was made
    for (let i = 0; i < articles.length; i++) {
        console.log('\narticle: ', articles[i]);
        const tags = await articles[i].listRelations('tags'); // eslint-disable-line no-await-in-loop
        console.log('tags: ', tags);
    }
};
