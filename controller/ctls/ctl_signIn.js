const otherDao=require('../../dao/other');
module.exports=function(req,res){
  var data={api:'signIn',val:req.body,session:req.session};
  otherDao.signIn([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}