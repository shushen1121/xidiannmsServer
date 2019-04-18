const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'getLink',val:req.body.id};
  // 查询链路
  linkDao.get([ data, undefined, res ])
  // HTTP响应
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}