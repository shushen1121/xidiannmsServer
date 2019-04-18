const otherDao=require('../../dao/other');
module.exports=function(req,res){
  var data={api:'signOut',val:req.body,session:req.session};
  otherDao.signOut([ data, undefined, res ])
  .then(
    otherDao.httpRes,
    otherDao.httpRes
  )
}