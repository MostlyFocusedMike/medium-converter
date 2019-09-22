export interface rawTagIntf {
    name: string,
    slug: string,
    postCount: number,
    metadata: object,
    type: string,
}

export interface rawArticleIntf {
    id: string;
    title: string;
    slug: string;
    uniqueSlug: string;
    virtuals: {
        previewImage: {
            imageId: string;
        },
        tags: rawTagIntf[];
    };
    content: {
        subtitle: string;
        metaDescription: string;
    };
}

export class RawMediumToJSON {
    rawText: string;
    userHandle: string;
    constructor(rawText: string, userHandle: string) {
        this.userHandle = userHandle;
        this.rawText = rawText;
    }

    checkForImage = (imageId: string) => (
        imageId
            ? `https://miro.medium.com/max/1400/${imageId}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/440px-Pictogram_voting_question.svg.png'
    );

    formatTags = (tags: rawTagIntf[]) => tags.map((tag) => ({ name: tag.name, slug: tag.slug }));

    formatArticle = (rawArticle: rawArticleIntf) => {
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