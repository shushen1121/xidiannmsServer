const WebSocket = require('ws');
const wsSend = require('./send'),
      wsMessage = require('./message');

const wss=new WebSocket.Server({port:3000});
console.log('webSocket port:3000');

global.ws=[];
wsSend();

// ws连接成功
wss.on('connection',function(ws,info){
  // 初始化token
  ws.token=undefined;
  // 返回wsKey
  var wsRes={ message:'wsInfo', data:{ name:'wskey', result:info.headers['sec-websocket-key'] } };
  ws.send(JSON.stringify(wsRes));
  wsMessage(ws);
})