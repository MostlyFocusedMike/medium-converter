const ObjectionBoiler = require('./objection-boiler');

class Tag extends ObjectionBoiler {
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

    // obj or array
    static async create(itemOrItemsToCreate) {
        return this.query().insertGraph(itemOrItemsToCreate);
    }

    static async where(fieldName, value) {
        return this.query().where(fieldName, '=', value);
    }
}

module.exports = Tag;
