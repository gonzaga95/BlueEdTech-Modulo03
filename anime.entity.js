class AnimeEntity {
    constructor(anime) {
        this.id = crypto.randomUUID();
        this.title = anime.title;
        this.gender = anime.gender;
        this.protagonist = anime.protagonist;
        this.year = anime.year;
    }

    validadete() {
        if (!this.title) {
            throw new Error('O título precisa ser informado');
        }
        if (!this.gender) {
            throw new Error('O gênero precisa ser informado');
        }
        if (!this.protagonist) {
            throw new Error('O protagonista precisa ser informado');
        }
        if (!this.year || this.year < 1960) {
            throw new Error('O ano é inválido');
        }
    }

    getAnime() {
        return {
            id: this.id,
            title: this.title,
            gender: this.gender,
            protagonist: this.protagonist,
            year: this.year,
        };
    }
}
