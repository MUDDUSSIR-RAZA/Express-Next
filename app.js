const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");

const auth = require("./routes/auth");
const product = require("./routes/product");
const app = express();
const { mongoose } = require("./model/connection");
const { verify } = require("./middleware/auth");
mongoose();

const public = path.join(process.cwd(), "public");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(public));
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/api/home", (req, res) => {
  const users = { message: "hello world" , people : ["Muddussir", "Tabish" , "kazim"] };
  return res.status(200).json(users);
});

app.use("/auth", auth);
app.use("/product", verify, product);

app.listen(5000);
5;
