const dbUtil=require('../../utils/dbUtil');

module.exports=function(req,res){
  // 初始化响应数据
  var resData={
    code:undefined,
    message:undefined,
    data:{
      name:undefined,
      results:[]
    }
  }

  if(!req.session.authority){
    resData.code=301;
    resData.message='查询失败';
    resData.data='未登录';
    res.json(resData);
    return;
  }
  else if(parseInt(req.session.authority)<1){
    resData.code=301;
    resData.message='查询失败';
    resData.data='权限不足';
    res.json(resData);
    return;
  }

  // 执行数据库命令
  global.dbQuery('select * from link; select * from machine;',errCallback,resCallback);

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
    for(var i=0;i<dbRes.length;i++){
      data={ type: dbUtil.queryTableName(dbRes[i]), data: dbRes[i] };
      resData.data.results.push(data);
    }
    res.json(resData);
  }
}