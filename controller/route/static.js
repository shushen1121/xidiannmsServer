module.exports=function(app){
  const ctl_staticData=require('../ctls/ctl_staticData');

  app.post('/staticCreate_way',function(req, res){
    req.tableName='create_way';
    ctl_staticData(req, res);
  })
  app.post('/staticLink_status',function(req, res){
    req.tableName='link_status';
    ctl_staticData(req, res);
  })
  app.post('/staticLink_type',function(req, res){
    req.tableName='link_type';
    ctl_staticData(req, res);
  })
  app.post('/staticMachine_type',function(req, res){
    req.tableName='machine_type';
    ctl_staticData(req, res);
  })
  app.post('/staticWarning_level',function(req, res){
    req.tableName='warning_level';
    ctl_staticData(req, res);
  })
  app.post('/staticWarning_type',function(req, res){
    req.tableName='warning_type';
    ctl_staticData(req, res);
  })
}