const events=require('events');

// 创建webSocket事件监听器
global.WSEmitter=new events.EventEmitter();
// 创建database事件监听器
global.DBEmitter=new events.EventEmitter();

// 导入socket组件
const socket=require('./socket/socket');
const wsEmitter=require('./socket/wsEmitter');
// 导入dataBase组件
const dataBase=require('./data/mysql');
