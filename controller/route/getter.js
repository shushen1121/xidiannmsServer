module.exports=function(app){
  // 获取拓扑结构
  const ctl_topology = require('../ctls/ctl_getTopology');
  app.post('/getTopology',function(req, res){
    ctl_topology(req, res);
  })

  // 获取设备详情
  app.post('/getMachineDetail',function(req, res){
    res.send('敬请期待');
  })

  // 获取链路详情
  app.post('/getLinkDetail',function(req, res){
    res.send('敬请期待');
  })

  // 获取告警
  const ctl_getWarning = require('../ctls/ctl_getWarning');
  app.post('/getWarning',function(req, res){
    ctl_getWarning(req, res);
  })
}