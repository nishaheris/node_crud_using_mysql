module.exports = (app) => {
  const employee = require("../controllers/employee");
  var router = require("express").Router();

  // Create New employee entry through API
  router.post("/add/", employee.create);
  router.get("/findAll/", employee.findAll);
  router.get("/findOne/:id/", employee.findOne);
  router.delete("/deleteOne/:id/", employee.deleteOne);
  router.delete("/deleteAll/", employee.deleteAll);
  router.get("/employeeByName/", employee.employeeByName);
  router.put("/edit/:id/", employee.employeeEdit);

  app.use("/", router);
};
