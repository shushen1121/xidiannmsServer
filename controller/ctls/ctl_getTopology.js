const dbUtil=require('../../utils/dbUtil');
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

  var cmd='select link_id,link_type,link_status,from_machine,to_machine from link;\
          select machine_id,machine_type,name from machine;';

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
    resData.data.results=[];
    for(var i=0;i<dbRes.length;i++){
      data={ type: dbUtil.queryTableName(dbRes[i]), data: dbRes[i] };
      resData.data.results.push(data);
    }
    res.json(resData);
  }
}