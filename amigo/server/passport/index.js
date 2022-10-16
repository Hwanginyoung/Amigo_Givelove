const passport = require('passport');
const localUser = require('./localUserStrategy');
const localTeam = require('./localTeamStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
        done(null, user.id);
    });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include: [{
        model: User,
        attributes: ['id', 'name'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['id', 'name'],
        as: 'Followings',
      }],
    })
  
      
        .then(user => done(null, user))
        .catch(err => done(err));
    });

  localUser();
  localTeam();
};