const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Money = require('../models/money/money');

const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
    const { UserId, Donation_moneyId, money } = req.body;
    try {
      await Money.create({
        UserId, 
        Donation_moneyId, 
        money,
      });
      console.log("기부금등록 성공")
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

router.put('/update/:id', async (req, res, next) => {
    const { money } = req.body;
  try {
    await Money.update({
        money,
    }, {
      where: { Donation_moneyId : req.params.id },
    });
    console.log("기부금수정 성공")
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await Money.destroy({ where: { Donation_moneyId : req.params.id } });
    console.log("기부금제거 성공")
    res.redirect('/');
});

module.exports = router;