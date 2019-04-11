module.exports=function(ws){
  // 告警
  global.EventEmitter.on('wsWarning',function(data){
    if(ws.token){
      var wsRes={
        message:'warning',
        data:data
      }
      ws.send(JSON.stringify(wsRes));
    }
  })
  // 通知更新
  global.EventEmitter.on('wsInform',function(data){
    if(ws.token){
      var wsRes={
        message:'inform',
        data:data
      }
      ws.send(JSON.stringify(wsRes));
    }
  })
}