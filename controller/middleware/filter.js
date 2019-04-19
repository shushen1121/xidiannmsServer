const otherDao=require('../../dao/other');
module.exports=function(req,res,next){
  var path=req.path;
  console.log('-----'+Date()+'---'+path+'-----');
  switch(path){
    case '/':
    case '/signOut':
    case '/signIn':
      next();
      break;
    case '/getMachine':
    case '/getLink':
    case '/getWarning':
    case '/staticData':
      var data={api:path,session:req.session};
      otherDao.getAuthority([data,undefined,res])
      .then(
        () => next(),
        otherDao.httpRes
      )
      break;
    case '/deleteMachine':
    case '/deleteLink':
    case '/deleteWarning':
    case '/addMachine':
    case '/addLink':
    case '/addWarning':
    case '/changeMachineDetail':
    case '/changeLinkDetail':
      var data={api:path,session:req.session};
      otherDao.setAuthority([data,undefined,res])
      .then(
        () => next(),
        otherDao.httpRes
      )
      break;
    default:
    var data={api:path,val:'未知API'};
    otherDao.httpRes([data,300,res])
  }
}