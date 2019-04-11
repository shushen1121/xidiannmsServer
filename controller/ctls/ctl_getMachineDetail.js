const logInfo=require('../logInfo');
module.exports=function(req,res){
  var resData;
  // 未登录
  if(!req.session.authority){
    resData=logInfo.log_321;
    res.json(resData);
    return;
  }
  // 权限不足
  else if(parseInt(req.session.authority)<1){
    resData=logInfo.log_322;
    res.json(resData);
    return;
  }
  // 必要参数不为空
  if(!req.body.machine_id){
    resData=logInfo.log_302;
    res.json(resData);
    return;
  }else{
    var cmd=`select * from machine where machine_id=${req.body.machine_id}`;
  }

  // 执行数据库命令
  global.dbQuery(cmd,errCallback,resCallback);

  // 错误回调
  function errCallback(){
    resData=logInfo.log_301;
    res.json(resData);
  }

  // 成功回调
  function resCallback(dbRes){
    resData=logInfo.log_220;
    resData.data=dbRes;
    res.json(resData);
  }
}