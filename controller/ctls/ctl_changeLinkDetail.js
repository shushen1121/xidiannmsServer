const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
<<<<<<< HEAD
  var data={api:'/changeLinkDelail',val:req.body.data};
=======
  var data={api:'changeLinkDetail',val:req.body.data};
>>>>>>> 5fd0306681282743eb2a5b795d7a7feb3225c8a6
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