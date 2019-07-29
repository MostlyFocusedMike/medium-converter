exports.up = (knex) => {
    return knex.schema.createTable('article_tags', (table) => {
        table.increments().primary();
        table.string('article_id').notNullable();
        table.string('tag_id').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('article_tags');
};
