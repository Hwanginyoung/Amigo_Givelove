const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const DonationMoney = require('../models/money/donation_money');

const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
    const { Donation_moneyId ,teamId, name, bank, account, owner_name, explanation } = req.body;
    try {
      await DonationMoney.create({
        Donation_moneyId,
        teamId, 
        name, 
        bank, 
        account, 
        owner_name, 
        explanation,
      });
      console.log("기부금안내등록 성공")
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

router.put('/update/:id', async (req, res, next) => {
    const { name, bank, account, owner_name, explanation } = req.body;
  try {
    await DonationMoney.update({
      name, 
      bank, 
      account, 
      owner_name, 
      explanation,
    }, {
      where: { TeamId : req.params.id },
    });
    console.log("기부금안내수정 성공")
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await DonationMoney.destroy({ where: { TeamId : req.params.id } });
    console.log("기부금안내제거 성공")
    res.redirect('/');
});

module.exports = router;