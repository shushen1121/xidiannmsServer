const warningDao=require('../../dao/warning'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  warningDao.get([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}