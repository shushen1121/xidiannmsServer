const warningDao=require('../../dao/warning'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.data};
  // 增加告警
  warningDao.add([ data, undefined, res ])
  // 查询告警 & HTTP响应
  .then(
    data => Promise.race([
      warningDao.get(data),
      otherDao.httpRes(data)
    ]),
    otherDao.httpRes
  )
  // 告警推送
  .then(
    otherDao.wsSend_warning
  )
}