const WebSocket = require('ws');

// 创建ws服务器:3001
const wss=new WebSocket.Server({port:3001});

// ws连接成功
wss.on('connection',function(ws,info){

  // 初始化token
  ws.token=false;

  // 返回wsKey
  ws.send(JSON.stringify({wskey:info.headers['sec-websocket-key']}));

  // 警告事件
  global.EventEmitter.on('wsSend',function(data){
    if(ws.token){
      var wsRes={
        message:'warning',
        data:data
      }
      ws.send(JSON.stringify(wsRes));
    }
  })

  // 验证token
  ws.on('message',function(wsReq){
    if(ws.token){
      var wsRes={
        code:300,
        message:'连接失败',
        data:'已连接'
      }
      ws.send(JSON.stringify(wsRes));
      return;
    }
    data=JSON.parse(wsReq);
    if(data.sessionId){
      global.wsToken(data.sessionId,errCallback,resCallback);
    }else{
      resCallback([]);
    }
    // errCallback
    function errCallback(){
      var wsRes={
        code:300,
        message:'连接失败',
        data:'服务器错误'
      }
      ws.send(JSON.stringify(wsRes));
    }
    // resCallback
    function resCallback(res){
      var wsRes={
        code:undefined,
        message:undefined,
        data:undefined
      }
      if(res[0]){
        wsRes.code=200;
        wsReq.message='连接成功';
        ws.token=true;
      }else{
        wsRes.code=300;
        wsReq.message='连接失败';
        wsReq.data='token错误'
      }
      ws.send(JSON.stringify(wsRes));
    }
  });
})