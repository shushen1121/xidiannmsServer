const logInfo=require('../logInfo');
module.exports=function(req,res){
  var resData;
  // 未登录
  if(!req.session.authority){
    resData=logInfo.log_321;;
    res.json(resData);
    return;
  }
  // 权限不足
  else if(parseInt(req.session.authority)<1){
    resData=logInfo.log_322;
    res.json(resData);
    return;
  }
  
  // var cmd='select * from warning where warning_end=0';
  var cmd = `SELECT a.*, 
  b.description AS create_way_description, 
  c.description AS warning_level_description, 
  d.description AS warning_type_description
  FROM warning a,create_way b,warning_level c, warning_type d
  WHERE a.create_way = b.create_way
  AND a.warning_level = c.warning_level
  AND a.warning_type = d.warning_type_id
  AND a.warning_end = 0
  `;

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