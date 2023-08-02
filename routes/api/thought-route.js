const router = require('express').Router();

const {getAllThought,getSingleThought, addThought,updateThought,removeThought } = require("../../controllers /thought-controller")
router.route('/').get(getAllThought);
router.route('/:userId').post(addThought);

router.route('/:id').get(getSingleThought).put(updateThought).delete(removeThought);

module.exports = router;