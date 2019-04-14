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
  //  参数为空或无效
  if(!(req.body.link_id instanceof Array)){
    resData=logInfo.log_302;
    res.json(resData);
    return;
  }else{
    // var cmd=`select * from link where mark_delete=0`;
    var cmd = `SELECT a.*, 
    b.name AS from_machine_name, 
    (SELECT c.name FROM machine c WHERE a.to_machine = c.machine_id) AS to_machine_name 
    FROM link a, machine b 
    WHERE a.from_machine = b.machine_id
    AND a.mark_delete = 0`;
    if(req.body.link_id.length!=0){
      cmd+=` and link_id in (${req.body.link_id.join(',')})`;
    }
  }
  // console.log(cmd)
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