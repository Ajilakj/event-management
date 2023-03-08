const router = require('express').Router();
const eventRoutes = require('./eventRoutes');

// Prefix all routes defined in `eventRoutes.js` with `/events
router.use('/events', eventRoutes);

module.exports = router;