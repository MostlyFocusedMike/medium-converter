const Path = require('path');
const BaseModel = require('../base');

class ObjectionBoiler extends BaseModel {
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
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
                first_published_at: { type: 'date' },
            },
        };
    }

    static get relationMappings() {
        return {
            tags: {
                relation: BaseModel.ManyToManyRelation,
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
