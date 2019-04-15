(function(){
  var ws=new WebSocket('ws://localhost:3000');
  ws.onopen=function(){
    console.log(`WebSocket('ws://localhost:3000')`);
  }
  ws.onmessage=function(event){
    console.log(JSON.parse(event.data));
  }
  window.wsSend=function(data){
    ws.send(JSON.stringify(data))
  };
})()