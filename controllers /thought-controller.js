const {Thought} = required('../models')
const thoughtController = {
    getAllThought(req, res) {
      Thought.find({})
        .then((dbThought) => {
          res.json(dbThought);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    },
    getSingleThought({ params }, res) {
      Thought.findOne(params)
        .then((dbThought) => {
          if (!dbThought) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
          }
          res.json(dbThought);
        })
        .catch((err) => res.json(err));
    },
    addThought({ params, body }, res) {
      Thought.create(body)
        .then(({ _id }) => {
          return User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { thoughts: _id } },
            { new: true }
          );
        })
        .then((dbThought) => {
          if (!dbThought) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
          }
          res.json(dbThought);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    },
  
    updateThought({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
        .then((updateThought) => {
          if (!updateThought) {
            return res.status(404).json({ message: "No thoughts with this id!" });
          }
          res.json(updateThought);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    },
  
    removeThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.thoughtId })
        .then((deletedThought) => {
          if (!deletedThought) {
            return res.status(404).json({ message: "No thoughts with this id!" });
          }
          res.json(deletedThought);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    },
  }