const express = require(`express`);
const router = express.Router();
const Policy = require(`../models/policy`);

router.get(`/policy`, (req, res, next) => {
  Policy.find({})
    .then((data) => res.json(data))
    .catch(next);
});
router.post(`/policy`, (req, res, next) => {
  req.body
    ? Policy.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: `Please enter an input` });
});

router.delete(`/policy/:id`, (req, res, next) => {
  Policy.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
