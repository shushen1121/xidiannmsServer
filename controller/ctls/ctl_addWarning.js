const warningDao=require('../../dao/warning'),
      linkDao=require('../../dao/link'),
      machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/addWarning',val:req.body.data};
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
  // 修改链路/设备告警标识
  .then(
    data => Promise.all([
      linkDao.changeStatus(data),
      machineDao.changeStatus(data)
    ])
    .then(
      data => data[0]
    ),
    otherDao.httpRes
  )
  // 告警推送
  .then(
    otherDao.wsSend_warning
  )
}