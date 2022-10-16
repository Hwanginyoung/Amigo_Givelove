const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Team = require('../models/team');

module.exports = () => {
  passport.use("team", new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, async (id, password, done) => {
    try {
      const exTeam = await Team.findOne({ where: { id } });
      if (exTeam) {
        const result = await bcrypt.compare(password, exTeam.password);
        if (result) {
          done(null, exTeam);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);  
      done(error);
    }
  }));
};