const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

class ObjectionBoiler extends Model {
    static get tableName() {
        return 'comments';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                content: { type: 'string' },
                article_id: { type: 'integer' },
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
            },
        };
    }
}

module.exports = ObjectionBoiler;
