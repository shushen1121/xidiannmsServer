const errLog=require('../log/errLog');
const sign=require('./sign');
const getter=require('./getter');
const setter=require('./setter');


module.exports=parse;
function parse(req,wsInfo){
    // 未登录
    if(!wsInfo.account){
        switch(req.type){
            
            case 'get':
            case 'set':
            case 'signOut':
            // 未登录
            global.WSEmitter.emit('send',errLog(100),wsInfo);
            return;

            case 'signIn':
            sign.in(req,wsInfo);
            return;
            
            default:
            // 未知请求
            global.WSEmitter.emit('send',errLog(200),wsInfo);
            return;
        }
    }
    // 已登录
    else{
        switch(req.type){
            
            case 'get':
            if(wsInfo.authority<1)
            // 权限不足
            global.WSEmitter.emit('send',errLog(104),wsInfo);
            else getter(req,wsInfo);
            return;

            case 'set':
            if(wsInfo.authority<2)
            // 权限不足
            global.WSEmitter.emit('send',errLog(104),wsInfo);
            else setter(req,wsInfo);
            return;

            case 'signOut':
            sign.out(wsInfo);
            return;

            case 'signIn':
            // 重复登录
            global.WSEmitter.emit('send',errLog(103),wsInfo);
            return;

            default:
            // 未知请求
            global.WSEmitter.emit('send',errLog(200),wsInfo);
            return;
        }
    }

}