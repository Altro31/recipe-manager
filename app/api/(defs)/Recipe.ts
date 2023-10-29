export class Recipe {

    private id: string
    private name: string
    private ingredients: string[]
    private prepSteps: string
    private imageUrl: string

    constructor(id: string, name: string, ingredients: string[] = [], prepSteps: string = '', imageUrl: string = '') {

        this.id = id
        this.name = name
        this.ingredients = ingredients
        this.prepSteps = prepSteps
        this.imageUrl = imageUrl

    }

    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    setName(name: string) {
        if (name)
            this.name = name
    }
    getIngredients() {
        return this.ingredients
    }

    getPrepSteps() {
        return this.prepSteps
    }
    setPrepSteps(prepSteps: string) {
        if (prepSteps)
            this.prepSteps = prepSteps
    }

    getImageUrl() {
        return this.imageUrl
    }

    setImageUrl(url: string) {
        if (url)
            this.imageUrl = url
    }
}