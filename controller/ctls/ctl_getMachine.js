const machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/getMachine',val:req.body.id};
  // 查询设备
  machineDao.get([ data, undefined, res ])
  // HTTP响应
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}