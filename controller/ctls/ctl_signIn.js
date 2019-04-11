const logInfo=require('../logInfo');
module.exports=function(req,res){
  var resData;
  // 必要参数不为空
  if(!req.body.account||!req.body.password){
    resData=logInfo.log_302;
    res.json(resData);
    return;
  }else{
    var cmd=`select password,authority from account where account='${req.body.account}'`;
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
    // 重复登录
    if(req.session.account){
      resData=logInfo.log_311;
    }
    // 账号不存在
    else if(!dbRes[0]){
      resData=logInfo.log_312;
    }
    // 账号或密码错误
    else if(dbRes[0].password!=req.body.password){
      resData=logInfo.log_313;
    }
    // 登录成功
    else{
      resData=logInfo.log_210;
      resData.data={
        name:'sessionId',
        results:req.session.id
      }
      req.session.authority=dbRes[0].authority;
      req.session.account=req.body.account;
    }
    res.json(resData);
  }
}