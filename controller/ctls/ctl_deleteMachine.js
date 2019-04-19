const machineDao=require('../../dao/machine'),
      linkDao=require('../../dao/link'),
      warningDao=require('../../dao/warning'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/deleteMachine',val:req.body.id};
  // 查找设备
  machineDao.get([ data, undefined, res ])
  // 删除设备(ByMachine)
  .then(
    machineDao.deleteByMachine,
    otherDao.httpRes
  )
  // // 查询链路(ByMachineId) & 删除告警(ByMachineId) & HTTP响应
  .then(
    data => Promise.race([
      Promise.all([
        linkDao.getByMachineId(data),
        warningDao.deleteByMachineId(data)
      ]),
      otherDao.httpRes(data)
    ]),
    otherDao.httpRes
  )
  // 删除链路(ByLink)
  .then(
    ([data0,data1]) => linkDao.deleteByLink(data0),
    otherDao.httpRes
  )
  // 删除告警(ByLinkId)
  .then(
    warningDao.deleteByLinkId,
    otherDao.httpRes
  )
  // 拓扑修改推送
  .then(
    otherDao.wsSend_inform
  )
}