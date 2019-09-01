
exports.up = (knex) => {
    return knex.schema.createTable('articles', (table) => {
        table.increments().primary();
        table.strings('medium_id').notNullable(); // save the id assigned by medium
        table.string('title'); // title of the article
        table.string('slug'); // lowercase, no punctuation, no spaces
        table.string('link'); // url of the medium link
        table.string('image'); // url of the cover photo of the article
        table.string('subtitle'); // optional subtitle given to the article
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('articles');
};


[
    {
        "mediumID": "16f1a7e639a0",
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