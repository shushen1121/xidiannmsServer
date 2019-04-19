const linkDao=require('../../dao/link'),
      otherDao=require('../../dao/other');

module.exports=function(req,res){
  var data={api:'/addLink',val:req.body.data};
  // 增加链路
  linkDao.add([ data, undefined, res ])
  // 查询链路 & HTTP响应
  .then(
    data => Promise.race([
      otherDao.httpRes(data),
      otherDao.wsSend_inform(data)
    ]),
    otherDao.httpRes
  )
}