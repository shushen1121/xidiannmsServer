module.exports=function(app){
  // // 修改设备详情
  // add
  const ctl_addMachine = require('../ctls/ctl_addMachine');
  app.post('/addMachine',function(req, res){
    ctl_addMachine(req, res);
  })
  // change
  const ctl_changeMachineDetail = require('../ctls/ctl_changeMachineDetail');
  app.post('/changeMachineDetail',function(req, res){
    ctl_changeMachineDetail(req, res);
  })
  // delete
  const ctl_deleteMachine = require('../ctls/ctl_deleteMachine');
  app.post('/deleteMachine',function(req, res){
    ctl_deleteMachine(req, res);
  })

  // 修改链路详情
  // add
  const ctl_addLink = require('../ctls/ctl_addLink');
  app.post('/addLink',function(req, res){
    ctl_addLink(req, res);
  })
  // change
  const ctl_changeLinkDetail = require('../ctls/ctl_changeLinkDetail');
  app.post('/changeLinkDetail',function(req, res){
    ctl_changeLinkDetail(req, res);
  })
  // delete
  const ctl_deleteLink = require('../ctls/ctl_deleteLink');
  app.post('/deleteLink',function(req, res){
    ctl_deleteLink(req, res);
  })

  // 新增告警信息
  const ctl_addWarning = require('../ctls/ctl_addWarning');
  app.post('/addWarning',function(req, res){
    ctl_addWarning(req, res);
  })
  // 删除告警信息
  const ctl_deleteWarning = require('../ctls/ctl_deleteWarning');
  app.post('/deleteWarning',function(req, res){
    ctl_deleteWarning(req, res);
  })
}