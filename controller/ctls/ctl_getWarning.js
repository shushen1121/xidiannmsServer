const warningDao=require('../../dao/warning'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/getWarning',val:req.body.id};
  // 查询告警
  warningDao.get([ data, undefined, res ])
  // HTTP响应
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}