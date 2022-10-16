const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();
const { Item, Money, User } = require('../models');

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = req.user ? req.user.Followers.length : 0;
    res.locals.followingCount = req.user ? req.user.Followings.length : 0;
    res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
    next();
});

// router.get('/',function(request, response){
//     response.sendFile( path.join(__dirname, 'public/index.html'))
// });

router.get('/', async (req, res, next) =>{
    // try {
    //     const items = await Item.findAll({
    //         include: {
    //             model: User,
    //             attributes: ['idx'],
    //         },
    //         order: [['createdAt', 'DESC']],
    //     });
        // res.render('main', {
        //     title: 'NodeBird',
        //     twits: items,
        // });

        res.send({ page: "main"});

    // } catch (err) {
    //     console.error(err);
    //     next(err);
    // }
});

router.get('/profile', (req, res) => {
    res.send({ page: "profile"});
    // res.render('profile', { title: '내 정보' });
});

router.get('/join', (req, res) => {
    res.render('join', { title: '회원가입' });
});

router.get('/update', (req, res) => {
    res.render('update', { title: '회원수정' }); 
});

router.get('/', (req, res, next) => {
    const twits = [];
    try {
        res.render('main', {
            title: 'Amigo',
            twits,
        });
    } catch (err){
        console.error(err);
        return next(err);
    }
});

module.exports = router;