module.exports=function(app){

  // 获取设备详情
  const ctl_getMachine = require('../ctls/ctl_getMachine');
  app.post('/getMachine',function(req, res){
    ctl_getMachine(req, res);
  })

  // 获取链路详情
  const ctl_getLink = require('../ctls/ctl_getLink');
  app.post('/getLink',function(req, res){
    ctl_getLink(req, res);
  })

  // 获取告警信息
  const ctl_getWarning = require('../ctls/ctl_getWarning');
  app.post('/getWarning',function(req, res){
    ctl_getWarning(req, res);
  })
}