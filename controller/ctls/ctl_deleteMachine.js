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
  .then(
    data => Promise.all([
      deleteLink(data),
      deleteMachineWarning(data),
    ]),
    otherDao.httpRes
  )
  .then(
    (data) => otherDao.wsSend_inform(data[0])
  )
}

function deleteLink(data){
  return new Promise(function(resolve,reject){
    linkDao.getByMachineId(data)
    .then(linkDao.deleteByLink)
    .then(warningDao.deleteByLinkId)
    .then(resolve)
  })
}


function deleteMachineWarning(data){
  return new Promise(function(resolve,reject){
    warningDao.deleteByMachineId(data)
    .then(
      otherDao.httpRes(data),
      otherDao.httpRes
    )
    .then(resolve)
  })
}