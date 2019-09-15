;const ObjectionBoiler = require('./objection-boiler');
const Tag = require('../tag');

class Article extends ObjectionBoiler {
    static async createWithTags(articles) {
        for (let i = 0; i < articles.length; i++) {
            const { medium_id, title, slug, link, image, subtitle, tags } = articles[i];
            const newArticle = await this.createOrUpdate({ medium_id }, { title, slug, link, image, subtitle })
            for (let j = 0; j < tags.length; j++) {
                const dbTag = await Tag.findOrCreate(tags[j]);
                const relatedTags = await newArticle.listRelations('tags');
                if (!relatedTags.find(tag => tag.id === dbTag.id)) {
                    newArticle.addRelations('tags', dbTag);
                }
            }
        }
    }
}

module.exports = Article;
