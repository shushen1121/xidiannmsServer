module.exports={
  /**
   * HTTP响应
   * @param {*} param0 
   */
  httpRes:function([data,code,res]){
    return new Promise(function(resolve,reject){
      console.log('httpRes');
      var resData={
        code,
        data,
        message:code==200?'success':'error'
      }
      res.json(resData);
    })
  },

  /**
   * 告警推送
   * @param {*} param0 
   */
  wsSend_warning:function([data,code,res]){
    return new Promise(function(resolve,reject){
      console.log('wsSend_warning')
      global.EventEmitter.emit('wsWarning',data);
    })
  },

  /**
   * 拓扑修改推送/详情修改推送
   * @param {*} param0 
   */
  wsSend_inform:function([data,code,res]){
    return new Promise(function(resolve,reject){
      console.log('wsSend_inform')
      global.EventEmitter.emit('wsInform',data);
    })
  },

  /**
   * 修改链路/设备告警标识 TODO
   * @param {*} param0 
   */
  changeLink_or_MachineStatus:function([data,code,res]){
    return new Promise(function(resolve,reject){

    })
  }
}