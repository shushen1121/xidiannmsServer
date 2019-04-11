const express = require('express'),
      session = require('express-session'),
      bodyParser=require('body-parser'),
      MySQLStore = require('express-mysql-session')(session);

const dbInfo=require('../database/dbInfo').xidiannms_session;

const app = express();
// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// session
app.use(session({
  name: 'session',
  secret: 'xidiannms_by_shushen', // 随机字符串
  resave: true,
  saveUninitialized: false,
  store:new MySQLStore(dbInfo),
  cookie: 60*60*1000
}));
// CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //项目上线后改成页面的地址
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Credentials", true); //跨域访问cookie
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

const sign=require('./route/sign')(app),
      getter=require('./route/getter')(app),
      setter=require('./route/setter')(app),
      static=require('./route/static')(app);

app.listen(3000);