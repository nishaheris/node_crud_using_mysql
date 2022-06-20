const db = require("../model");
const Employee = db.employees;
const Op = db.sequelize.Op;

//Inster and save data in Employee
exports.create = (req, res) => {
  //Validate Request
  if (!req.body.ename) {
    res.status(400).send({
      message: "Employee name can not be blank",
    });
    return;
  }

  //Create an Employee
  const employee = {
    ename: req.body.ename,
    // description: req.body.description,
    // email: req.body.email,
    // location: req.body.location,
    // experience: req.body.experience,
    // phone: req.body.phone,
  };
  console.log(employee);

  Employee.create(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};
