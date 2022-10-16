const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Team = require('../models/team');

const router = express.Router();

router.put('/update/:id', async (req, res, next) => {
  const { password, korea_name, english_name, email, mobile, address, ceo, business_number } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    await Team.update({
        password : hash, 
        korea_name, 
        english_name,
        email, 
        mobile,
        address,
        ceo,
        business_number,
    }, {
      where: { id : req.params.id },
    });
    console.log("팀 수정 성공");
    return res.json({
      statusCode: 200, 
      message: '팀 수정 성공',
    });
    // return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await Team.destroy({ where: { id : req.params.id } });
    console.log("팀 탈퇴 성공");
    // res.redirect('/');
    return res.json({
      statusCode: 200, 
      message: '팀 탈퇴 성공',
    });
});

module.exports = router;