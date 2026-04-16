const { Sequelize } = require("@sequelize/core");

const sequelize = new Sequelize({
  dialect: "mysql",
  port: 3306,
  url: "mysql://root:@localhost/shahriar",
  logging: false,
});

sequelize.sync({ alter: true });
// sequelize.sync({ force: true });
sequelize
  .authenticate()
  .then(() => console.log("Connected to DB Successfully"))
  .catch((error) =>
    console.log(`Error while connecting to DB: ${error?.message}`),
  );

module.exports = { sequelize };
