const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'changeLinkDelail',val:req.body.data};
  // 修改链路详情
  linkDao.changeDetail([ data, undefined, res ])
  // 查询链路 & HTTP响应
  .then(
    data => Promise.race([
      linkDao.get(data),
      otherDao.httpRes(data)
    ]),
    otherDao.httpRes
  )
  // 详情修改推送
  .then(
    otherDao.wsSend_inform
  )
}