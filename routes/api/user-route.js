const router = require('express').Router();

const {getAllUsers, getSingleUser, updateUser, deleteUser, createUser} = require("../../controllers /user-controller")
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;