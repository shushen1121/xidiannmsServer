const mysql=require('mysql');

// 初始化mysql连接信息
var connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1121807045',
    database : 'xidiannms',
    multipleStatements: true // 多语句查找
});

// 连接数据库
connection.connect();

global.dbQuery=function(cmd,errCallback,resCallback){
  connection.query(cmd,function(err,res){
    if(err){
      errCallback();
    }else{
      resCallback(res);
    }
  })
}