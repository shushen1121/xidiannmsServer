const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  // 查找链路
  linkDao.get([ data, undefined, res ])
  // 删除告警(byWarning)
  .then(
    linkDao.deleteByLink,
    otherDao.httpRes
  )
  // HTTP响应 & 告警推送
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      otherDao.wsSend_inform(data)
    ]),
    otherDao.httpRes
  )
}