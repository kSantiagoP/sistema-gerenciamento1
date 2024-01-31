const {Router} = require("express");
const {getClients, postClients} = require("../controllers/clientes");


const router = Router();

router.get('/', getClients);

router.post('/', postClients);


module.exports = router