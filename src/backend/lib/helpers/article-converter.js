class ArticlesConverter {
    constructor(rawText, userHandle) {
        this.userHandle = userHandle;
        this.rawText = rawText;
        return this.niceJSONArticles;
    }

    checkForImage(imageId) {
        return imageId
            ? `https://miro.medium.com/max/1400/${imageId}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/440px-Pictogram_voting_question.svg.png'
    }

    formatTags(tags) {
        return tags.map(({ name, slug }) => ({ name, slug }))
    }

    formatArticle(rawArticle) {
        const {
            id: mediumID,
            title,
            slug,
            uniqueSlug,
            virtuals: { previewImage: { imageId }, tags },
            content: { subtitle, metaDescription },
        } = rawArticle;

        const link = `https://medium.com/@${this.userHandle}/${uniqueSlug}`;

        return {
            mediumID,
            title,
            slug,
            link,
            image: this.checkForImage(imageId),
            subtitle,
            metaDescription,
            tags: this.formatTags(tags),
        };
    };

    get roughJSONArticles() {
        return JSON.parse(this.rawText.slice(this.rawText.indexOf('{'))).payload.references.Post;
    }

    get niceJSONArticles() {
        return Object.keys(this.roughJSONArticles).map(article => this.formatArticle(this.roughJSONArticles[article]));
    }
}

module.exports = ArticlesConverter;
