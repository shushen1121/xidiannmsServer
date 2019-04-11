module.exports=function(req,res){
  // 初始化响应数据
  var resData={
    code:undefined,
    message:undefined,
    data:[]
  }
  // 执行数据库命令
  global.dbQuery(`select * from ${req.tableName}`,errCallback,resCallback);

  // 错误回调
  function errCallback(){
    resData.code=300;
    resData.message='查询失败';
    resData.data='数据库错误';
    res.json(resData);
  }

  // 成功回调
  function resCallback(dbRes){
    resData.code=200;
    resData.message='查询成功';
    resData.data=dbRes;
    res.json(resData);
  }
}