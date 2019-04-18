const otherDao=require('../../dao/other');
module.exports=function(req,res){
  var data={api:req.tableName,tableName:req.tableName};
  otherDao.getStaticData([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}