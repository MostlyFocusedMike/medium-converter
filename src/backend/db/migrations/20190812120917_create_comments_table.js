exports.up = (knex) => {
    return knex.schema.createTable('comments', (table) => {
        table.increments().primary();
        table.string('content');
        table.integer('article_id').unsigned().notNullable();
        table.foreign('article_id').references('id').inTable('articles').onDelete('CASCADE'); // cascade deletes this join when the foreign row is deleted
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('comments');
};
