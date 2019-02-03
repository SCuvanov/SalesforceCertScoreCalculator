class Certification {
    constructor(name, questionCount, passingScore) {
        this.categories = [];
        this.name = name;
        this.questionCount = questionCount;
        this.passingScore = passingScore;
    }

    getName() {
        return this.name;
    }

    getCategories() {
        return this.categories;
    }

    addCategory(categoryName, categoryWeight) {
        if (!categoryName || !categoryWeight) return;
        this.categories.push(this.buildCategory(categoryName, (categoryWeight / 100)));
    }

    setCategories(categoryNames, categoryWeights) {
        if (!categoryNames || !categoryWeights) return;
        if (categoryNames.length !== categoryWeights.length) return;
        for (let i = 0; i < categoryNames.length; i++) {
            this.categories.push(this.buildCategory(categoryNames[i], (categoryWeights[i] / 100)));
        }
    }

    buildCategory(categoryName, categoryWeight) {
        return {
            'name': categoryName,
            'weight': categoryWeight
        };
    }
}