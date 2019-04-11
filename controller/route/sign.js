module.exports=function(app){
  // 登录
  const ctl_signIn = require('../ctls/ctl_signIn');
  app.post('/signIn',function(req, res){
    ctl_signIn(req, res);
  })

  // 退出
  const ctl_signOut = require('../ctls/ctl_signOut');
  app.post('/signOut',function(req, res){
    ctl_signOut(req, res);
  })
}