const express = require('express');
const { getAllStockMarket, createInvestment, getInvestmentByRiskScore } = require('../controller/stockMarketCtrl');
const router = express.Router();

router.post('/create', createInvestment);
router.get('/', getAllStockMarket);
router.get('/:riskScore', getInvestmentByRiskScore);


module.exports = router
