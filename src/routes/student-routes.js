const express = require('express');
const router = express.Router();
const { create,destroy,update,get } = require('../controllers/student-controller');
const { authenticate } = require('../middlewares/authenticate');

router.post('/',authenticate,create);
router.get('/:id',get);
router.patch('/:id',update);
router.delete('/:id',destroy);

module.exports = router;