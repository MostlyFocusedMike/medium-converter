const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

class ObjectionBoiler extends Model {
    static get tableName() {
        return 'tags';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' },
            },
        };
    }

    static get relationMappings() {
        return {
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Path.join(__dirname, '..', 'tag'),
                join: {
                    from: 'tags.id',
                    through: {
                        from: 'article_tags.tag_id',
                        to: 'article_tags.article_id',
                    },
                    to: 'articles.id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
