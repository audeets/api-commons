import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import bodyParser from 'body-parser';
import { init } from './auth/passport.js';

const createApp = (allowMethods) => {
  var app = express();
  init();
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_BASE_URL);
    res.setHeader('Access-Control-Allow-Methods', allowMethods);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  // const domain = process.env.COOKIE_DOMAIN;
  const domainConf = {}; //domain && domain !== 'localhost' ? { domain } : {};
  app.use(
    session({
      name: process.env.COOKIE_NAME,
      secret: process.env.SESSION_SECRET,
      resave: true,
      rolling: true,
      saveUninitialized: true,
      cookie: {
        ...domainConf,
        maxAge: 1000 * 60 * 30, // 30 mins
        httpOnly: false
      },
      store: MongoStore.create({
        mongoUrl: process.env.URL_MONGO
      })
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  return app;
};

export default { createApp };
