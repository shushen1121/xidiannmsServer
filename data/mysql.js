var mysql=require('mysql');
const errLog=require('../log/errLog');

// 初始化mysql连接信息
var connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1121807045',
    database : 'xidiannms'
});

// 连接数据库
connection.connect();

// 注册DB.request事件，用于监控调用数据库指令
global.DBEmitter.on('request',function(cmd,form,wsInfo){
    // console.log(cmd)
    // 执行数据库指令
    connection.query(cmd,function(err,res){
        if(err){
            // 数据库错误
            global.WSEmitter.emit('send',errLog(5),wsInfo);
        }else{
            var resRes={
                type:'data-'+form,data:res
            };
            // 触发WS.send，响应数据
            global.WSEmitter.emit('send',resRes,wsInfo);
        }
    })
})

// 注册DB.signin事件，用于登录检测对比密码
global.DBEmitter.on('signin',function(cmd,value,wsInfo){
    // console.log(cmd)
    // 执行数据库指令
    connection.query(cmd,function(err,res){
        if(err){
            // 数据库错误
            global.WSEmitter.emit('send',errLog(5),wsInfo);
        }else{
            // 数据库返回空
            if(res.length==0){
                // 账号不存在
                global.WSEmitter.emit('send',errLog(6),wsInfo);
            }
            // 密码不相同
            else if(res[0].password!=value.pw){
                // 密码错误
                global.WSEmitter.emit('send',errLog(7),wsInfo);
            }
            // 密码相同
            else if(res[0].password==value.pw){
                var resRes={
                    type:'signIn',data:value.ac
                };
                wsInfo.authority=parseInt(res[0].authority);
                wsInfo.account=value.ac;
                global.WSEmitter.emit('send',resRes,wsInfo);
            }
            // 其他未知错误
            else{
                // 未知错误
                global.WSEmitter.emit('send',errLog(8),wsInfo);
            }
        }
    })
})