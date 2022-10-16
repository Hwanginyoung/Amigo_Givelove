const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Item = require('../models/item/item');

const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
    const { UserId, Donation_itemId, name, explanation } = req.body;
    try {
      await Item.create({
        UserId, 
        Donation_itemId, 
        name, 
        explanation,
      });
      console.log("물품등록 성공")
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

router.put('/update/:id', async (req, res, next) => {
    const { name, explanation } = req.body;
  try {
    await Item.update({
        name, 
        explanation,
    }, {
      where: { Donation_itemId : req.params.id },
    });
    console.log("물품수정 성공")
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await Item.destroy({ where: { Donation_itemId : req.params.id } });
    console.log("물품제거 성공")
    res.redirect('/');
});

module.exports = router;