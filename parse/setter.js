const errLog=require('../log/errLog');

module.exports=setter;

function setter(req,wsInfo){
    global.WSEmitter.emit('send',errLog(401),wsInfo);
}