

export class Recipe {
    constructor(name, flour00Ratio, semolinaRatio, saltRatio, waterRatio, yeastRatio, defaultBalls, defaultWeight, additionalOptions = {}) {
        this.name = name;
        this.flour00Ratio = flour00Ratio;
        this.semolinaRatio = semolinaRatio;
        this.saltRatio = saltRatio;
        this.waterRatio = waterRatio;
        this.yeastRatio = yeastRatio;
        this.defaultBalls = defaultBalls;
        this.defaultWeight = defaultWeight;
        this.additionalOptions = additionalOptions;
    }

    calculateIngredients(totalWeight) {
        return {
            flour00: (totalWeight * this.flour00Ratio).toFixed(2),
            semolina: (totalWeight * this.semolinaRatio).toFixed(2),
            salt: (totalWeight * this.saltRatio).toFixed(2),
            water: (totalWeight * this.waterRatio).toFixed(2),
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


