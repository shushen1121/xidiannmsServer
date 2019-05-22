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
  // cookie: 60*1000
}));
// CORS
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://www.shushen.xyz:8000');
	res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
})
//静态网页，地址:'/'
app.use('/',express.static('public'));
// 过滤器
const filter=require('./middleware/filter');
app.use(filter);
// API
const route=require('./middleware/route')(app);

app.listen(8000);
console.log('http port:8000');