const express = require('express');
const router = express.Router();

const controller = require('../controllers/xlsxController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

router.get('/:id', controller.get);

module.exports = router;