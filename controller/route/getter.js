module.exports=function(app){
  // 获取拓扑结构
  const ctl_getTopology = require('../ctls/ctl_getTopology');
  app.post('/getTopology',function(req, res){
    ctl_getTopology(req, res);
  })

  // 获取设备详情
  const ctl_getMachineDetail = require('../ctls/ctl_getMachineDetail');
  app.post('/getMachineDetail',function(req, res){
    ctl_getMachineDetail(req, res);
  })

  // 获取链路详情
  const ctl_getLinkDetail = require('../ctls/ctl_getLinkDetail');
  app.post('/getLinkDetail',function(req, res){
    ctl_getLinkDetail(req, res);
  })

  // 获取告警信息
  const ctl_getWarning = require('../ctls/ctl_getWarning');
  app.post('/getWarning',function(req, res){
    ctl_getWarning(req, res);
  })
}