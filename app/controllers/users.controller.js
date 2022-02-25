const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname || !req.body.email ) {
      res.status(400).send({
        message: "User info can not be empty!"
      });
      return;
    }

    // Create a User
    const user = {
      firstname: req.body.firstname,
      surnmae: req.body.surnmae,
      email: req.body.email,
      telephone: req.body.telephone,
      gender: req.body.gender,
      dob: req.body.date + '/' + req.body.month + '/' + req.body.year,
      comments: req.body.comments,
    };

    // Save Tutorial in the database
    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Users."
        });
      });
  };



    // Retrieve all Users from the database.

    exports.findAll = (req, res) => {
        const firstname = req.query.firstname;
        var condition = firstname ? { firstname: { [Op.like]: `%${firstname}%` } } : null;
        Users.findAll({ where: condition })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving users."
                });
            });
    };
