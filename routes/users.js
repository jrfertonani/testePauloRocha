var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");


/* GET home page. */
router.get('/', usersController.listar);

module.exports = router;
