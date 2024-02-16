const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.get('/', function (req, res) {
  res.json({
    message: 'API works fine.',
  })
})
router.route('/presale-info').get(controller.getPresaleInfo)
router.route('/purchase-info').get(controller.getPurchaseInfo)
router
  .route('/mypurchase-info/:walletaddress')
  .get(controller.getMyTokenSaleInfo)

router.route('/generate-signature').post(controller.generateSignature)
router.route('/request-sol').post(controller.requestSOL)
router.route('/process-evm').post(controller.processEVM)
router.route('/process-sol').post(controller.processSOL)

module.exports = router
