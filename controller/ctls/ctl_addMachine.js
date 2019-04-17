const machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.data};
  // 增加设备
  machineDao.add([ data, undefined, res ])
  // 查询设备 & HTTP响应
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      otherDao.wsSend_inform(data)
    ]),
    otherDao.httpRes
  )
}