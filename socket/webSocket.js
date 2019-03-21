const WebSocket = require('ws');

// 创建ws服务器:3000
const wss=new WebSocket.Server({port:3000});

// ws连接成功
wss.on('connection',function(ws,info){
    // ws连接信息
    var wsInfo={
        // wsKey
        key:info.headers['sec-websocket-key'],
        // ws对象
        ws:ws,
        // 账户
        account:undefined,
        // 权限
        authority:0
    }

    // 返回wsKey
    ws.send(JSON.stringify(wsInfo.key));

    // 接受请求
    ws.on('message',function(req){
        global.WSEmitter.emit('message',JSON.parse(req),wsInfo);
    });
})