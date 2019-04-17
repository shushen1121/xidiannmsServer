module.exports=function(){
  // 告警
  global.EventEmitter.on('wsWarning',function(data){
    console.log(data)
    for(var i=0;i<global.ws.length;i++){
      var ws=global.ws[i];
      if(ws.token){
        var wsRes={
          message:'warning',
          data:data
        }
        ws.send(JSON.stringify(wsRes));
      }
    }
  })
  // 通知更新
  global.EventEmitter.on('wsInform',function(data){
    console.log(data)
    for(var i=0;i<global.ws.length;i++){
      var ws=global.ws[i];
      if(ws.token){
        var wsRes={
          message:'inform',
          data:data
        }
        ws.send(JSON.stringify(wsRes));
      }
    }
  })
}