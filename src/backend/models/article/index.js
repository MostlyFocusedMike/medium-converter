const ObjectionBoiler = require('./objection-boiler');

class Article extends ObjectionBoiler {
    static get useLimitInFirst() { // check docs
        return true;
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static async find(id) {
        return this.query().findById(id);
    }

    static async findBy(fieldName, value) {
        return this.query().where(fieldName, '=', value).first();
    }

    static async where(fieldName, value) {
        return this.query().where(fieldName, '=', value);
    }

    // obj or array
    static async create(itemOrItemsToCreate) {
        return this.query().insertGraph(itemOrItemsToCreate);
    }

    static async createAndFetch(itemOrItemsToCreate) {
        return this.query().insertGraphAndFetch(itemOrItemsToCreate);
    }

    static async update(note) {
        return this.query().updateAndFetchById(note.id, { title: note.title, text: note.text });
    }

    async addRelation(relationName, relationObj) {
        this.$relatedQuery(relationName).relate(relationObj.id);
    }

    async listTags() {
        return this.$relatedQuery('tags');
    }
}

module.exports = Article;
