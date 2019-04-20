const warningDao=require('../../dao/warning'),
      linkDao=require('../../dao/link'),
      machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/deleteWarning',val:req.body.id};
  // 查找告警
  warningDao.get([ data, undefined, res ])
  // 修改链路/设备告警标识
  .then(
    data => Promise.all([
      linkDao.changeStatus(data),
      machineDao.changeStatus(data)
    ]).then(
      ([data0,data1]) => data0
    )
  )
  // 删除告警(byWarning)
  .then(
    warningDao.deleteByWarning,
    otherDao.httpRes
  )
  // HTTP响应 & 告警推送
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      otherDao.  wsSend_inform(data)
    ]),
    otherDao.httpRes
  )

}