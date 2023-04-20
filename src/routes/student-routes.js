const express = require('express');
const router = express.Router();
const { create,destroy,update,get } = require('../controllers/student-controller');
const authenticate = require('../middlewares/authenticate');

router.post('/',authenticate,create);
router.get('/:id',authenticate,get);
router.patch('/:id',authenticate,update);
router.delete('/:id',authenticate,destroy);

module.exports = router;