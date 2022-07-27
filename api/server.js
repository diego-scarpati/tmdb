const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const { User } = require("./models");
const app = express();
const routes = require("./routes");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(cors()); // esta librería es para poder trabajar front con back en localhost
app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());
app.use(
  session({
    secret: "Flandria",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    function (username, password, done) {
      User.findOne({ where: { username } })
        .then((user) => {
          // console.log("User: ", user);
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            // console.log("Existe el usuario");
            if (hash !== user.password) {
              // console.log("Contraseña incorrecta");
              return done(null, false); // invalid password
            }
            // console.log("Contraseña correcta");
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

// How we save the user
passport.serializeUser(function (user, done) {
  console.log("Serialize User ejectuado");
  // console.log("User: ", user.id);
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
  console.log("Deserialize User ejectuado");
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((error) => console.log(error));
});

app.use("/api", routes); //todas las rutas empiezan con api
app.use("/", (req, res, next) => res.redirect("/api")); // me aseguro que si o si vaya para /api si entraste en otra ruta

const PORT = 3002;

db.sync({ force: false })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    })
  )
  .catch((error) => console.log("Sync Error:", error));
