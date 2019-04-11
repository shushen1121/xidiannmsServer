const logInfo=require('../logInfo');
module.exports=function(req,res){
  var resData;

  var cmd=`select * from ${req.tableName}`;
  
  // 执行数据库命令
  global.dbQuery(cmd,errCallback,resCallback);

  // 错误回调
  function errCallback(){
    resData=logInfo.log_301;
    res.json(resData);
  }

  // 成功回调
  function resCallback(dbRes){
    resData=logInfo.log_200;
    resData.data=dbRes;
    res.json(resData);
  }
}