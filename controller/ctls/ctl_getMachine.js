const machineDao=require('../../dao/machine'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  machineDao.get([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}