module.exports=function(app){
  // 修改设备详情
  const ctl_setMachineDetail = require('../ctls/ctl_setMachineDetail');
  app.post('/setMachineDetail',function(req, res){
    ctl_setMachineDetail(req, res);
  })
  // 修改链路详情
  const ctl_setLinkDetail = require('../ctls/ctl_setLinkDetail');
  app.post('/setLinkDetail',function(req, res){
    ctl_setLinkDetail(req, res);
  })
  // 修改告警信息
  const ctl_setWarning = require('../ctls/ctl_setWarning');
  app.post('/setWarning',function(req, res){
    ctl_setWarning(req, res);
  })
}