
exports.up = (knex) => {
    return knex.schema.createTable('articles', (table) => {
        table.increments().primary();
        table.string('medium_id').notNullable(); // save the id assigned by medium
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