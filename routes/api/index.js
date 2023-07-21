const router = require('express').Router();
const userRoutes = require('./user-route');
const thoughtRoutes = require('./thought-route')
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;