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

        // 登录及权限错误
        case 100:
        log.data.log='未登录';
        break;
        case 101:
        log.data.log='账号不存在';
        break;
        case 102:
        log.data.log='密码错误';
        break;
        case 103:
        log.data.log='重复登录';
        break;
        case 104:
        log.data.log='权限不足';
        break;

        // 请求错误
        case 200:
        log.data.log='未知请求';
        break;
        case 201:
        log.data.log='无效属性类型';
        break;

        // 数据库错误
        case 300:
        log.data.log='数据库错误';
        break;

        // 其他错误
        case 400:
        log.data.log='未知错误';
        break;
        case 401:
        log.data.log='功能即将上线';
        break;
        default:
        log.data.log='未录入错误';
        break;
    }
    return log;
}