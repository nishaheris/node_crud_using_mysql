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
    designation: req.body.designation,
    email: req.body.email,
    location: req.body.location,
    experince: req.body.experince,
    phone: req.body.phone,
  };

  Employee.create(employee)
    .then((data) => {
      res.status(200).send({
        code: 200,
        message: "Record insterd successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

//Get All records form Eployee table
exports.findAll = (req, res) => {
  Employee.findAll()
    .then((data) => {
      res.status(200).send({
        code: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

//Get records By id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          code: 404,
          message: `Cannot find Employee with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Error retrieving Employee with id=" + id,
      });
    });
};

//Delete Single record
exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Employee was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id,
      });
    });
};

//Delete All record form DB
exports.deleteAll = (req, res) => {
  Employee.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Employee were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Employee.",
      });
    });
};

//GET employee by name
exports.employeeByName = (req, res) => {
  Employee.findAll({ where: { ename: "Shruti" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

//Update employee data
exports.employeeEdit = (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Employee updated successfully",
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id,
      });
    });
};
