const warningDao=require('../../dao/warning'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  // 查找告警
  warningDao.get([ data, undefined, res ])
  // 修改链路/设备告警标识 TODO

  // 删除告警(byWarning)
  .then(
    warningDao.deleteByWarning,
    otherDao.httpRes
  )
  // HTTP响应 & 告警推送
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      otherDao.wsSend_warning(data)
    ]),
    otherDao.httpRes
  )

}