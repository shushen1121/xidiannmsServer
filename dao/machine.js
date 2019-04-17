const strUtil=require('../utils/strUtil');
module.exports=dao={
  resolve:function(last,data,resolve,httpRes){
    var res={last,val:data};
    resolve([res,200,httpRes]);
  },
  reject:function(last,data,reject,httpRes){
    var res={last,val:data};
    reject([res,300,httpRes]);
  },
  /**
   * 查询设备
   * @param {*} param0
   */
  get:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var last='getMachine';
      console.log(Date.now()+'-----'+last)
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 获取所有设备
      else if(data.val.length==0){
        var cmd=`select * from machine`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
        )
      }
      // 获取指定设备
      else{
        var cmd=`select * from machine where machine_id in (${data.val.join(',')})`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
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
      var last='addMachine';
      console.log(Date.now()+'-----'+last)
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 新增设备
      else{
        var prop=strUtil.jsObjToSQLProp_insert(data.val);
        var cmd = `insert into machine ${prop}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0.insertId,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
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
      var last='deleteMachineById TODO';
      data0 => dao.resolve(last,data.val,resolve,httpRes);
    })
  },

  /**
   * 删除设备(ByMachine)
   * @param {*} param0 
   */
  deleteByMachine:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var last='deleteMachineByMachine';
      console.log(Date.now()+'-----'+last)
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(last,'参数无效',reject,httpRes);
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
          data0 => dao.resolve(last,machine_id,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
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
      var last='changeMachineDetail';
      console.log(Date.now()+'-----'+last)
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      else{
        var prop=strUtil.jsObjToSQLProp_update(data.val);
        var cmd=`update machine set ${prop} where machine_id=${data.val.machine_id}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,[data.val.machine_id],resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
        )
      }
    })
  }
}