module.exports=errLog;
function errLog(errId){
    var log={
        type:'log',
        data:{
            logId:errId,
            log:''
        }
    }
    switch(errId){

        case 0:
        log.data.log='未登录';
        break;

        case 1:
        log.data.log='未知请求';
        break;

        case 2:
        log.data.log='重复登录';
        break;

        case 3:
        log.data.log='权限不足';
        break;

        case 4:
        log.data.log='无效属性类型';
        break;

        case 5:
        log.data.log='数据库错误';
        break;

        case 6:
        log.data.log='账号不存在';
        break;
        
        case 7:
        log.data.log='密码错误';
        break;

        case 8:
        log.data.log='未知错误';
        break;

        case 9:
        log.data.log='功能即将上线';
        break;
    }
    return log;
}