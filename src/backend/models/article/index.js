;const ObjectionBoiler = require('./objection-boiler');
const Tag = require('../tag');

class Article extends ObjectionBoiler {
    static async createWithTags(articles) {
        for (let i = 0; i < articles.length; i++) {
            const { medium_id, title, slug, link, image, subtitle, tags } = articles[i];
            const newArticle = await this.create({ medium_id, title, slug, link, image, subtitle })
            for (let j = 0; j < tags.length; j++) {
                const dbTag = await Tag.findOrCreate(tags[j]);
                newArticle.addRelations('tags', dbTag);
            }
        }
    }
}

module.exports = Article;
