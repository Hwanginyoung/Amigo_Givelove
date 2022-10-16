  const express = require('express');
  const passport = require('passport');
  const bcrypt = require('bcrypt');
  const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
  const User = require('../models/user');

  const router = express.Router();

  router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { id, password, name, email, mobile } = req.body;
    try {
      const exUser = await User.findOne({ where: { id } });
      if (exUser) {
        return res.redirect('/join?error=exist');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        id, 
        password : hash, 
        name, 
        email, 
        mobile,
      });
      console.log("회원가입 성공");
      res.json({ 
        statusCode: 200,  
        message: '회원 가입 성공'
      });
      // return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

  router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('user', (authError, user, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        return res.json({
          statusCode: 400,
          message: info.message,
        });
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.json({
          statusCode: 200, 
          message: '로그인 성공',
        });
        // return res.redirect('/');
      });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
  });

  router.get('/logout', isLoggedIn, (req, res) => {
      req.logout();
      req.session.destroy();
      // res.redirect('/');
      res.json({
        statusCode: 200,
        message: "로그아웃 성공",
      });
  });

  module.exports = router;