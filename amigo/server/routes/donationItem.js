const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const DonationItem = require('../models/item/donation_item');

const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
    const { teamId, name, explanation } = req.body;
    try {
      await DonationItem.create({
        teamId, 
        name, 
        explanation,
      });
      console.log("물품안내등록 성공")
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

router.put('/update/:id', async (req, res, next) => {
    const { name, explanation } = req.body;
  try {
    await DonationItem.update({
      name, 
      explanation,
    }, {
      where: { TeamId : req.params.id },
    });
    console.log("물품안내수정 성공")
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await DonationItem.destroy({ where: { TeamId : req.params.id } });
    console.log("기부금안내제거 성공");
    res.redirect('/');
});

module.exports = router;