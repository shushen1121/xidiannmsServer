const logInfo=require('../logInfo');
module.exports=function(req,res){
  var resData;
  if(req.session.account){
    req.session.authority=undefined;
    req.session.account=undefined;
    resData=logInfo.log_215;
  }else{
    resData=logInfo.log_316;
  }
  res.json(resData);
}