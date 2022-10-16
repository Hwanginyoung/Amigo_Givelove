const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
// const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');

const bodyParser = require('body-parser');

const cors = require('cors');

dotenv.config();
const userAuthRouter = require('./routes/userAuth');
const teamAuthRouter = require('./routes/teamAuth');
const pageRouter = require('./routes/page');
const userRouter = require('./routes/user');
const teamRouter = require('./routes/team');

const moneyRouter = require('./routes/money');
const itemRouter = require('./routes/item');
const donationMoneyRouter = require('./routes/donationMoney');
const donationItemRouter = require('./routes/donationItem');

const testRouter = require('./routes/test');

const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));

passportConfig();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'html');

// nunjucks.configure('views', {
//     express: app,
//     watch: true,
// });

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/', pageRouter);
app.use('/api', testRouter);

app.use('/userAuth', userAuthRouter);
app.use('/teamAuth', teamAuthRouter);
app.use('/user', userRouter);
app.use('/team', teamRouter);
app.use('/money', moneyRouter);
app.use('/item', itemRouter);
app.use('/donationMoney', donationMoneyRouter);
app.use('/donationItem', donationItemRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    console.log("에러");
    res.json({ message: err.message });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

module.exports = app;