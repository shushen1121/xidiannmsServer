const otherDao=require('../../dao/other');
module.exports=function(req,res){
  var data={api:'/staticData',val:req.body.data};
  otherDao.getStaticData([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}