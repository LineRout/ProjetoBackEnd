const express = require('express');
const router = express.Router();
const { getAll, create, remove } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', getAll);
router.post('/', authMiddleware, create);
router.delete('/:id', authMiddleware, remove);

module.exports = router;
