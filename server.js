const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/model");

//Call database
db.sequelize.sync();

var corsOptions = { origin: "http://localhost:8080" };
app.use(cors());

//This is use for content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Describe simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome first application on Node" });
});

require("./app/routes/routes")(app);

//Set port, listend for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}.`);
});
