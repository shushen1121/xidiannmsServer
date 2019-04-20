module.exports=function(){
  // 推送
  global.EventEmitter.on('wsInform',function(data){
    switch(data.api){
      case '/addWarning':
        wsData={
          name:'warning',
          result:{
            type:'add',
            data:data.val[0]
          }
        }
        break;
      case '/deleteWarning':
        wsData={
          name:'warning',
          result:{
            type:'delete',
            id:data.val
          }
        }
        break;
      case '/changeMachineDetail':
        wsData={
          name:'machine',
          result:data.val[0]
        }
        break;
      case '/changeLinkDetail':
        wsData={
          name:'link',
          result:data.val[0]
        }
        break;
      case '/addLink':
      case '/addMachine':
      case '/deleteLink':
      case '/deleteMachine':
        wsData={
          name:'topology'
        }
        break;
      default:
        wsData={
          name:'error'
        }
        break;
    }
    for(var i=0;i<global.io.length;i++){
      var socket=global.io[i];
      if(socket.token){
        socket.send(JSON.stringify(wsData));
      }
    }
  })
}