const controller = require('../controllers/controller');
const { Router } = require('express');

const router = Router();

router.post('/createData', controller.create);
router.get('/listAll', controller.listAll);

module.exports = router;