
exports.up = (knex) => {
    return knex.schema.createTable('articles', (table) => {
        table.increments().primary();
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('articles');
};
