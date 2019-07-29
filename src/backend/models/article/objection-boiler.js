const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

class ObjectionBoiler extends Model {
    static get tableName() {
        return 'articles';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                content: { type: 'string' },
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
                    from: 'articles.id',
                    through: {
                        from: 'article_tags.article_id',
                        to: 'article_tags.tag_id',
                    },
                    to: 'tags.id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
