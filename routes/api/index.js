const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
// const clientRoutes = require('./clientRoutes');

// Prefix all routes defined in `eventRoutes.js` with `/events
router.use('/events', eventRoutes);
// router.use('/client', clientRoutes);

module.exports = router;