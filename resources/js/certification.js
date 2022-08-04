class Certification {
    constructor(name, questionCount, passingScore, roles, categories) {
        this.name = name;
        this.questionCount = questionCount;
        this.passingScore = passingScore;
        this.roles = roles;
        this.categories = categories;
    }

    getName() {
        return this.name;
    }

    getCategories() {
        return this.categories;
    }
}