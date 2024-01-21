const Investment = require('../models/investmentModel')
const asyncHandler = require("express-async-handler");



const createInvestment =asyncHandler(async (req, res)=>{
  try{
    const newInvestment = await Investment.create(req.body)
    res.json({
      newInvestment
    });
  }catch(error){
    throw new Error(error)
  }
});

const getAllStockMarket = asyncHandler(async (req, res) => {
    try {
      const getAllInvestment = await Investment.find();
      res.json(getAllInvestment);
    } catch (err) {
      throw new Error(err);
    }
  });

  const getInvestmentByRiskScore = async (req, res) => {
    const { riskScore } = req.params;
  
    try {
      const investment = await Investment.findOne({ riskScore: riskScore });
  
      if (!investment) {
        return res.status(404).json({ message: 'Investment not found for the given risk score' });
      }
  
      res.json(investment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  



  module.exports ={
    getAllStockMarket, createInvestment, getInvestmentByRiskScore
  }