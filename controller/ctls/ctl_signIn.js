module.exports=function(req,res){
  // 初始化响应数据
  var resData={
    code:undefined,
    message:undefined,
    data:{
      sessionId:undefined
    }
  }

  // 执行数据库命令
  global.dbQuery(`select password,authority from account where account='${req.body.account}'`,errCallback,resCallback);

  // 错误回调
  function errCallback(){
    resData.code=300;
    resData.message='登录失败';
    resData.data='数据库错误';
    res.json(resData);
  }

  // 成功回调
  function resCallback(dbRes){
    // 账号不存在
    if(req.session.account){
      resData.code=201;
      resData.message='登录失败';
      resData.data='已登录';
    }
    // 账号不存在
    else if(!dbRes[0]){
      resData.code=202;
      resData.message='登录失败';
      resData.data='账号不存在';
    }
    // 登录成功
    else if(dbRes[0].password==req.body.password){
      resData.code=200;
      resData.message='登录成功';
      resData.data.sessionId=req.session.id;
      req.session.authority=dbRes[0].authority;
      req.session.account=req.body.account;
    }
    // 账号或密码错误
    else{
      resData.code=203;
      resData.message='登录失败';
      resData.data='账号或密码错误';
    }
    res.json(resData);
  }
}