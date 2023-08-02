const {User} = require("../models /User")
const userController= {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
    .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser({body}, res) {
    User.create(body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser({ params, body }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUser) => {
        if (!dbUser) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUser) => {
        if (!dbUser) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  }


module.exports = userController