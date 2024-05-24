

export class Recipe {
    constructor(name, ingredients, defaultBalls, defaultWeight, options = {}) {
        this.name = name;
        this.ingredients = ingredients; // ingredients is now an object of key-value pairs
        this.defaultBalls = defaultBalls;
        this.defaultWeight = defaultWeight;
        this.options = options; // Additional details like proofing time, water type
    }

    getTotalBaseWeight() {
        return Object.values(this.ingredients).reduce((total, amount) => total + amount, 0);
    }

    calculateIngredients(totalWeight) {
        const totalBaseWeight = this.getTotalBaseWeight();
        let result = {};

        // Calculate the amounts based on the ingredient ratios
        Object.keys(this.ingredients).forEach(ingredient => {
            result[ingredient] = ((totalWeight * this.ingredients[ingredient]) / totalBaseWeight).toFixed(2);
        });
        Object.assign(result, this.options);
        
        return result;
    }

  
}


