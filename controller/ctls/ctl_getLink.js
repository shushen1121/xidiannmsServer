const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={last:'begin',val:req.body.id};
  linkDao.get([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}