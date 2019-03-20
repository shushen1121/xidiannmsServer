module.exports={
    // 登录
    // req = { type:'signIn', value: { ac:String, pw:String } }
    in:function(req,wsInfo){
        var cmd='select password,authority from account where account='+req.value.ac+';';
        global.DBEmitter.emit('signin',cmd,req.value,wsInfo);
    },
    // 退出
    out:function(wsInfo){
        wsInfo.ws.close();
    }
}