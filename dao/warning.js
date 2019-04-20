const strUtil=require('../utils/strUtil');
const warningSql=require('./SQLString/warning');
const dao={
  resolve:function(api,data,resolve,httpRes){
    var res={api,val:data};
    resolve([res,200,httpRes]);
  },
  reject:function(api,data,reject,httpRes){
    var res={api,val:data};
    reject([res,300,httpRes]);
  },
  /**
   * 查询告警
   * @param {*} param0 
   */
  get:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getWarning';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 获取所有告警
      else if(data.val.length==0){
        var cmd=warningSql.getAll();
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
      // 获取指定告警
      else{
        var cmd=warningSql.getByIds(data.val);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 增加告警
   * @param {*} param0 
   */
  add:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='addWarning';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 新增告警
      else{
        var cmd = warningSql.insert(data.val);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,[data0.insertId],resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除告警(ById) Debug
   * @param {*} param0 
   */
  deleteById:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteWarningById';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除所有告警
      else if(data.val.length==0){
        var cmd=warningSql.deleteAll();
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data.val,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
      // 删除指定告警
      else{
        var cmd=warningSql.deleteByIds(data.val);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data.val,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除告警(ByWarning)
   * @param {*} param0 
   */
  deleteByWarning:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteWarningByWarning';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除指定告警
      else{
        var warning_id=[];
        for(var i=0;i<data.val.length;i++){
          warning_id.push(data.val[i].warning_id);
        }
        var cmd=warningSql.deleteByIds(warning_id);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,warning_id,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除告警(ByLinkId)
   * @param {*} param0 
   */
  deleteByLinkId:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteWarningByLinkId';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else if(data.val.length==0){
        dao.resolve(data.api,data0,resolve,httpRes)
      }
      // 删除指定告警
      else{
        // var cmd=`delete from warning where warning_aim_id in (${data.val.join(',')}) and warning_aim='link'`;
        var cmd=warningSql.deleteByAimIds('link', data.val);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除告警(ByMachineId)
   * @param {*} param0 
   */
  deleteByMachineId:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteWarningByMachineId';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else if(data.val.length==0){
        dao.resolve(data.api,data0,resolve,httpRes)
      }
      // 删除指定告警
      else{
        // var cmd=`delete from warning where warning_aim_id in (${data.val.join(',')}) and warning_aim='machine'`;
        var cmd = warningSql.deleteByAimIds('machine', data.val);
        console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  }
}
module.exports=dao;