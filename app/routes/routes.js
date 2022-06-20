module.exports = (app) => {
  const employee = require("../controllers/employee");
  var router = require("express").Router();

  // Create New employee entry through API
  router.post("/", employee.create);

  app.use("/", router);
};
