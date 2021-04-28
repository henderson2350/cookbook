const sequelize = require('../config/connection');
const seedRecipe = require('./recipeSeeds');
const seedUser = require('./userSeeds');

const seedAll = async () => {
    try {await sequelize.sync({ force: true });

    await seedRecipe();

    await seedUser();

    process.exit(0);
    } catch (err) {
        console.log(err);
    }
}

seedAll();