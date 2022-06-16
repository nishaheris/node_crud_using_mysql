module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("tbl_employee", {
    ename: {
      type: Sequelize.STRING,
    },
    designation: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    experince: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
  });
  return Employee;
};
