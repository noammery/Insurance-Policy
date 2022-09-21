const express = require(`express`);
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3001;
const routes = require(`./routes/api`);
const bodyParser = require(`body-parser`);
require(`dotenv`).config();
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://noam:QTVHRWXP6U4bSp7m@cluster0.tmudl6o.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Connected to Data-base`))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send();
});

app.use(bodyParser.json());

app.use(`/api`, routes);

app.use((err, next) => {
  console.log(err);
  next;
});

app.listen(port, () => {
  console.log(`You are running on port ${port}`);
});
