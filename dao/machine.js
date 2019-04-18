const strUtil=require('../utils/strUtil');
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
   * 查询设备
   * @param {*} param0
   */
  get:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getMachine';
      console.log(Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 获取所有设备
      else if(data.val.length==0){
        var cmd=`select * from machine`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
      // 获取指定设备
      else{
        var cmd=`select * from machine where machine_id in (${data.val.join(',')})`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 增加设备
   * @param {*} param0
   */
  add:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='addMachine';
      console.log(Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 新增设备
      else{
        var prop=strUtil.jsObjToSQLProp_insert(data.val);
        var cmd = `insert into machine ${prop}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0.insertId,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除设备(ById) TODO
   * @param {*} param0
   */
  deleteById:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteMachineById TODO';
      data0 => dao.resolve(data.api,data.val,resolve,httpRes);
    })
  },

  /**
   * 删除设备(ByMachine)
   * @param {*} param0 
   */
  deleteByMachine:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteMachineByMachine';
      console.log(Date()+' - '+log)
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除指定设备
      else{
        var machine_id=[];
        for(var i=0;i<data.val.length;i++){
          machine_id.push(data.val[i].machine_id);
        }
        var cmd=`delete from machine where machine_id in (${machine_id.join(',')})`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,machine_id,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 修改设备详情
   * @param {*} param0 
   */
  changeDetail:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='changeMachineDetail';
      console.log(Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else{
        var prop=strUtil.jsObjToSQLProp_update(data.val);
        var cmd=`update machine set ${prop} where machine_id=${data.val.machine_id}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,[data.val.machine_id],resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 修改设备告警标识
   * @param {*} param0 
   */
  changeStatus:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='changeMachineStatus';
      console.log(Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else{
        // addWarning
        if(data.api=='addWarning'){
          var prop=`machine_status='2'`;
        }
        // deleteWarning
        else if(data.api=='deleteWarning'){
          var prop=`machine_status='1'`;
        }

        var warning_aim_id=[];
        for(var i=0;i<data.val.length;i++){
          if(data.val[i].warning_aim=='machine')
            warning_aim_id.push(data.val[i].warning_aim_id)
        }

        // []
        if(warning_aim_id.length==0){
          dao.resolve(data.api,data.val,resolve,httpRes)
        }
        // [···]
        else{
          var cmd=`update machine set ${prop} where machine_id in (${warning_aim_id.join(',')})`;
          global.dbQuery(cmd)
          .then(
            data0 => dao.resolve(data.api,data.val,resolve,httpRes),
            data0 => dao.reject(data.api,data0,reject,httpRes)
          )
        }
      }
    })
  }
}
module.exports=dao;