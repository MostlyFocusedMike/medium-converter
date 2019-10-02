/* eslint-disable no-await-in-loop */
const ObjectionBoiler = require('./objection-boiler');
const Tag = require('../tag');

class Article extends ObjectionBoiler {
    /**
     * take articles with nested tags to add to db, some items may be new, or
     * need to be updated, some tags have been created so shouldn't add relationships
     * @param {articles} articles - the formatted json of articles and nested tags
     */
    static async createWithTags(articles) {
        console.log('articles: ', articles);
        for (let i = 0; i < articles.length; i++) {
            const {
                medium_id, // eslint-disable-line camelcase
                title,
                slug,
                link,
                image,
                subtitle,
                tags,
            } = articles[i];
            console.log('articles[i]: ', articles[i]);
            const newArticle = await this.createOrUpdate({ medium_id }, { title, slug, link, image, subtitle });
            const filteredTags = Tag.filterTags(tags);
            for (let j = 0; j < filteredTags.length; j++) {
                await this.addTag(filteredTags[j], newArticle);
            }
        }
    }

    /**
     * find or create tag, and then add to article if it hasn't been added already
     * @param {object} jsonTag - a tag from json without an id, may need to be created, or added
     * @param {object} newArticle - a db article object
     */
    static async addTag(jsonTag, dbArticle) {
        const dbTag = await Tag.findOrCreate(jsonTag);
        const relatedTags = await dbArticle.listRelations('tags');
        if (!relatedTags.find(tag => tag.id === dbTag.id)) {
            dbArticle.addRelations('tags', dbTag);
        }
    }

    /**
     * get all articles with their related tags inside
     */
    static async getArticlesWithTags() {
        const articles = await this.all();
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const relatedTags = await article.listRelations('tags');
            article.tags = relatedTags;
        }
        return articles;
    }
}

module.exports = Article;
