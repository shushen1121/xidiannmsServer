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

  // 修改设备
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

  // 修改链路
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

  // 修改告警
  // add
  const ctl_addWarning = require('../ctls/ctl_addWarning');
  app.post('/addWarning',function(req, res){
    ctl_addWarning(req, res);
  })
  // delete
  const ctl_deleteWarning = require('../ctls/ctl_deleteWarning');
  app.post('/deleteWarning',function(req, res){
    ctl_deleteWarning(req, res);
  })

  // 静态表
  const ctl_staticData=require('../ctls/ctl_staticData');
  app.post('/staticData',function(req, res){
    ctl_staticData(req, res);
  })

  // // 静态表
  // const ctl_staticData=require('./ctls/ctl_staticData');
  // app.post('/staticCreate_way',function(req, res){
  //   req.tableName='create_way';
  //   ctl_staticData(req, res);
  // })
  // app.post('/staticLink_status',function(req, res){
  //   req.tableName='link_status';
  //   ctl_staticData(req, res);
  // })
  // app.post('/staticLink_type',function(req, res){
  //   req.tableName='link_type';
  //   ctl_staticData(req, res);
  // })
  // app.post('/staticMachine_type',function(req, res){
  //   req.tableName='machine_type';
  //   ctl_staticData(req, res);
  // })
  // app.post('/staticWarning_level',function(req, res){
  //   req.tableName='warning_level';
  //   ctl_staticData(req, res);
  // })
  // app.post('/staticWarning_type',function(req, res){
  //   req.tableName='warning_type';
  //   ctl_staticData(req, res);
  // })
}