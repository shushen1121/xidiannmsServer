const httpServer = require('http').Server(),
      io = require('socket.io')(httpServer);
httpServer.listen(3030);
console.log('socket.io port:3030');

const ioSend = require('./send.js'),
      ioMessage = require('./message');

global.io=[];
ioSend();

io.on('connection',function(socket){
  socket.token=undefined;
  var wsRes={ message:'ioInfo', data:{ name:'socketId', result:socket.id }};
  socket.send(JSON.stringify(wsRes));
  ioMessage(socket);
})