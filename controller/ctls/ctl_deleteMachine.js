const machineDao=require('../../dao/machine'),
      linkDao=require('../../dao/link')
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  // 查找设备
  machineDao.get([ data, undefined, res ])
  // 删除设备(ByMachine)
  .then(
    machineDao.deleteByMachine,
    otherDao.httpRes
  )
  // HTTP响应 & 删除链路(ByMachine)
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      linkDao.deleteByMachine(data)
    ]),
    otherDao.httpRes
  )
  // 拓扑修改推送
  .then(
    otherDao.wsSend_inform
  )
}