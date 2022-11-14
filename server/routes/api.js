const express = require(`express`);
const router = express.Router();
const User = require(`../models/users`);

router.get(`/users`, (req, res, next) => {
  User.find({})
    .then((data) => res.json(data))
    .catch(next);
});
router.post(`/users`, (req, res, next) => {
  req.body
    ? User.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: `Please enter an input` });
});

router.delete(`/users/:id`, (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.delete("/example/:id", (req, res, next) => {
  const id = req.params.id;
  id &&
    User.findByIdAndDelete(id)
      .then((data) => res.json(data))
      .catch(next);
});

module.exports = router;
