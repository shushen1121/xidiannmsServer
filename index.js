const events=require('events');

global.EventEmitter=new events.EventEmitter();

const database=require('./database/main');
const controller=require('./controller/main');