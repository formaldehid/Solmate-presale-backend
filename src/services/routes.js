const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/presale-info', controller.getPresaleInfo)
router.get('/purchase-info', controller.getPurchaseInfo)
router.get('/mypurchase-info/:walletaddress', controller.getMyTokenSaleInfo)

router.post('/generate-signature', controller.generateSignature)
router.post('/request-sol', controller.requestSOL)
router.post('/process-evm', controller.processEVM)
router.post('/process-sol', controller.processSOL)

module.exports = router;