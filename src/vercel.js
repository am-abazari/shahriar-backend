const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
require("module-alias/register");
const cookieParser = require("cookie-parser");

const { NotFoundError, FinalError } = require("@errors/errorHandling");
const { AllRouter } = require("@router/all.router");

require("@configs/sequelize.config");
const { CreateRelations } = require("@configs/relations.config");
const { SwaggerConfig } = require("@configs/swagger.config");

dotenv.config({ quiet: true });

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

SwaggerConfig(app);
CreateRelations();

app.use(AllRouter);

app.use(NotFoundError);
app.use(FinalError);

module.exports = app;
