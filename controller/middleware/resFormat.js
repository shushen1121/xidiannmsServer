module.exports=function(req,res,next){
  res.resJson=function(data){
    var resData={
      code:data.code,
      message:data.message,
      data:data.data.val
    }
    res.json(resData);
    console.log('-----'+Date()+'---end-----');
  }
  next();
}