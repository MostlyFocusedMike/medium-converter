class ArticleAdapter {
    static url = '/articles';
    static options: RequestInit = { // RequestInit is fetch's options interface
        method: 'GET',
        credentials: 'include', // fetch doesn't include cookies by default
        headers: {
            accepts: 'application/json',
        },
    };

    static getAll() {
        return fetch(this.url, this.options).then(response => response.json());
    }
}

export default ArticleAdapter;