const linkDao=require('../../dao/link'),
      warningDao=require('../../dao/warning')
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'deleteLink',val:req.body.id};
  // 查找链路
  linkDao.get([ data, undefined, res ])
  // 删除告警(byWarning)
  .then(
    linkDao.deleteByLink,
    otherDao.httpRes
  )
  // HTTP响应 & 删除告警(ByLinkId)
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      warningDao.deleteByLinkId(data)
    ]),
    otherDao.httpRes
  )
  // 告警推送
  .then(
    otherDao.wsSend_inform
  )
}