export class Recipe {
    constructor(id, name, ingredients = [], prepSteps = '') {
        let _id = id
        let _name = name
        let _ingredients = ingredients
        let _prepSteps = prepSteps

        this.getId = () => _id
        this.getName = () => _name
        this.setName = function (name) {
            if (name) _name = name
        }
        this.getIngredients = () => _ingredients

        this.getPrepSteps = () => _prepSteps
        this.setPrepSteps = (prepSteps) => {
            if (prepSteps) _prepSteps = prepSteps
        }
    }
}