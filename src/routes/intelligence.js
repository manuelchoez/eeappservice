const app = require('express');
const { getAllIntelligence } = require('../controllers/intelligence');
const { getAllQuestion } = require('../controllers/question');
const router = app.Router();


router.get('/getAllIntelligence', getAllIntelligence);
router.get('/getAllQuestion', getAllQuestion);


module.exports = router;