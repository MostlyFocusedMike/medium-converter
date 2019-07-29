const ObjectionBoiler = require('./objection-boiler');

class Article extends ObjectionBoiler {
    static async find(id) {
        return this.query().findById(id);
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static async update(note) {
        return this.query().updateAndFetchById(note.id, { title: note.title, text: note.text });
    }
}

module.exports = Article;
