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

    static get relationMappings() {
        return {
            article: {
                relation: Model.BelongsToOneRelation,
                modelClass: Path.join(__dirname, '..', 'article'),
                join: {
                    from: 'comments.article_id',
                    to: 'articles.id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
