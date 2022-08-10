if (process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
const app = express();
const routes = require("./routes");

const cookieParser = require("cookie-parser");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);
// app.use("/", (req, res, next) => res.redirect("/api"));

const PORT = process.env.PORT_BACK || 3002

db.sync({ force: false })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    })
  )
  .catch((error) => console.log("Sync Error:", error));
