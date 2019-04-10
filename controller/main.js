const express = require('express'),
      session = require('express-session'),
      bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
  name: 'session',
  secret: 'xidiannms_by_shushen', // 随机字符串
  resave: true,
  saveUninitialized: false,
  cookie: 60*60*1000
}));

// 登录
const ctl_signIn = require('./ctl_signIn');
app.post('/signIn',function(req, res){
  ctl_signIn(req, res);
})

// 退出
const ctl_signOut = require('./ctl_signOut');
app.post('/signOut',function(req, res){
  ctl_signOut(req, res);
})

// 拓扑图
const ctl_topology = require('./ctl_topology');
app.post('/topology',function(req, res){
  ctl_topology(req, res);
})

// 设备详情
app.post('/getMachineDetail',function(req, res){
  res.send('敬请期待');
})

// 链路详情
app.post('/getLinkDetail',function(req, res){
  res.send('敬请期待');
})

// 告警
const ctl_getWarning = require('./ctl_getWarning');
app.post('/getWarning',function(req, res){
  ctl_getWarning(req, res);
})

app.listen(8080);