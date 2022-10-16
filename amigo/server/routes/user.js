const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.put('/update/:id', async (req, res, next) => {
  const { password, name, email, mobile } = req.body;
  // console.log(id, password, name, email, mobile);
  try {
    // const exUser = await User.findOne({ where: { id } });
    // if (exUser) {
    //   return res.redirect('/join?error=exist');
    // }
    const hash = await bcrypt.hash(password, 12);
    await User.update({
      password : hash, 
      name : name,  
      email : email, 
      mobile : mobile,
    }, {
      where: { id : req.params.id },
    });
    console.log("회원수정 성공")
    return res.json({
      statusCode: 200, 
      message: '회원 수정 성공',
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  } 
});

router.delete('/delete/:id', async (req, res) => {
//   console.log(req.params.id);
  await User.destroy({ where: { id : req.params.id } });
    console.log("회원탈퇴 성공")
    // res.redirect('/');
    return res.json({
      statusCode: 200, 
      message: '회원 탈퇴 성공',
    });
});

module.exports = router;