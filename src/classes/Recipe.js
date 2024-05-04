

export class Recipe {
    constructor(name, flour00Amount, semolinaAmount, saltAmount, waterAmount, yeastAmount, defaultBalls, defaultWeight, additionalOptions = {}) {
        this.name = name;
        this.sum = flour00Amount + semolinaAmount + saltAmount + waterAmount + yeastAmount;
        this.flour00Ratio = flour00Amount / this.sum;
        this.semolinaRatio = semolinaAmount / this.sum;
        this.saltRatio = saltAmount / this.sum;
        this.waterRatio = waterAmount / this.sum;
        this.yeastRatio = yeastAmount / this.sum;
        this.defaultBalls = defaultBalls;
        this.defaultWeight = defaultWeight;
        this.additionalOptions = additionalOptions;
    }

    calculateIngredients(totalWeight) {
        return {
            flour00: (totalWeight * this.flour00Ratio).toFixed(0),
            semolina: (totalWeight * this.semolinaRatio).toFixed(0),
            salt: (totalWeight * this.saltRatio).toFixed(0),
            water: (totalWeight * this.waterRatio).toFixed(0),
            yeast: (totalWeight * this.yeastRatio).toFixed(2),
            //... operator is used to spread the additional options object into the result object
            //so if calculateAdditionalOptions returns an object with additional options,for example:
            // { sugar: 10, oliveOil: 20 }
            // then the result object will look like this:
            // { flour00: 100, semolina: 50, salt: 5, water: 200, yeast: 2, sugar: 10, oliveOil: 20 }
            ...this.calculateAdditionalOptions(totalWeight),
        };
    }

    calculateAdditionalOptions(totalWeight) {
        // Override this method in subclasses for specific behaviors
        return {};
    }
}


