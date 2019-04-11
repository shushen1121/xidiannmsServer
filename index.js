const events=require('events');

global.EventEmitter=new events.EventEmitter();

const database=require('./database/main');
const wsToken=require('./database/wsToken');

const controller=require('./controller/main');
const webSocket=require('./websocket/main');