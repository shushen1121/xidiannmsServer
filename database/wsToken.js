const mysql=require('mysql');
const dbInfo=require('./dbInfo').xidiannms_session;
global.wsToken=function(sessionId,errCallback,resCallback){
  var cmd=`select session_id from account where session_id='${sessionId}'`;
  // 初始化mysql连接信息
  var connection=mysql.createConnection(dbInfo);

  // 连接数据库
  connection.connect();

  connection.query(cmd,function(err,res){
    if(err){
      errCallback();
    }else{
      resCallback(res);
    }
  })
  // 关闭数据库
  connection.end();
}
