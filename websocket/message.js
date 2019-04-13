module.exports=function(ws){
  // 验证token
  ws.on('message',function(wsReq){
    if(ws.token){
      var wsRes={ code:300, message:'token', data:'重复授权' };
      ws.send(JSON.stringify(wsRes));
      return;
    }

    try{
      var data = JSON.parse(wsReq);
    }catch{
      var wsRes={ code:301, message:'token', data:'参数错误' };
      ws.send(JSON.stringify(wsRes));
      return;
    }

    if(data.token){
      global.wsToken(data.token,errCallback,resCallback);
    }else{
      var wsRes={ code:302, message:'token', data:'无效参数' };
      ws.send(JSON.stringify(wsRes));
    }
    // errCallback
    function errCallback(){
      var wsRes={ code:303, message:'token', data:'数据库错误' };
      ws.send(JSON.stringify(wsRes));
    }
    // resCallback
    function resCallback(res){
      var wsRes;
      if(!res[0]){
        wsRes={ code:304, message:'token', data:'无权限连接' };
      }else{
        wsRes={ code:200, message:'token', data:'获取权限成功' };
        ws.token=data.token;
      }
      ws.send(JSON.stringify(wsRes));

      global.ws.push(ws);
    }
  });
}