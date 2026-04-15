const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
require("module-alias/register");
const cookieParser = require("cookie-parser");

const { NotFoundError, FinalError } = require("@errors/errorHandling");
const { AllRouter } = require("@router/all.router");

const app = express();
dotenv.config({ quiet: true });
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(AllRouter);

app.use(NotFoundError);
app.use(FinalError);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Server Listening on http://localhost:${PORT}`);
});
