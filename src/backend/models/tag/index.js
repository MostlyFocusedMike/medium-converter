const ObjectionBoiler = require('./objection-boiler');

class Tag extends ObjectionBoiler {
    static async find(id) {
        return this.query().findById(id);
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = Tag;
