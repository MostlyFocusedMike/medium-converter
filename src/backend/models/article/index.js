const ObjectionBoiler = require('./objection-boiler');

class Article extends ObjectionBoiler {
    static get useLimitInFirst() { // check docs
        return true;
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static async all() {
        return this.query();
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

    // returns all properties of obj, not just sent and the created id
    static async createAndFetch(itemOrItemsToCreate) {
        return this.query().insertGraphAndFetch(itemOrItemsToCreate);
    }

    static async update(note) {
        return this.query().updateAndFetchById(note.id, { title: note.title, text: note.text });
    }

    async addRelations(relationName, relationObjOrObjs) {
        return this.$relatedQuery(relationName).relate(relationObjOrObjs.id);
    }

    async listRelations(relationName) {
        return this.$relatedQuery(relationName);
    }
}

module.exports = Article;
