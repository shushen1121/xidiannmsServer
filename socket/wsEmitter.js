const parse=require('../parse/main');

/**
 * WSEmitter.on('message');
 * 接受请求
 */
global.WSEmitter.on('message',function(req,wsInfo){
    parse(req,wsInfo);
});

/**
 * WSEmitter.on('send');
 * 返回响应
 */
global.WSEmitter.on('send',function(res,wsInfo){
    wsInfo.ws.send(JSON.stringify(res));
});