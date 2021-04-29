const Sequelize = require("sequelize");
require("dotenv").config();
// const path = require("path");
// { path: path.resolve(__dirname, "../.env") }

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: "localhost",
//       dialect: "mysql",
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
