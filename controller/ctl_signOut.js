module.exports=function(req,res){
  var resData={
    code:undefined,
    message:undefined,
    data:undefined
  }

  if(req.session.account){
    req.session.authority=undefined;
    req.session.account=undefined;
    resData.code=200;
    resData.data='退出成功';
    resData.message="退出成功";
  }else{
    resData.code=300;
    resData.data='退出失败';
    resData.message="未登录";
  }
  res.json(resData);
}