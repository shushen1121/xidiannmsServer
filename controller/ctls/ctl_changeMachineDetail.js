const machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.data};
  // 修改设备详情
  machineDao.changeDetail([ data, undefined, res ])
  // 查询链路 & HTTP响应
  .then(
    data => Promise.race([
      machineDao.get(data),
      otherDao.httpRes(data)
    ]),
    otherDao.httpRes
  )
  // 详情修改推送
  .then(
    otherDao.wsSend_inform
  )
}