// Routes for the API
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Route message for a wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
