const linkSql=require('./SQLString/link');
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
   * 查询链路
   * @param {*} param0
   */
  get:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getLink';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 获取所有链路
      else if(data.val.length==0){
        var cmd=linkSql.getAll();
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
      // 获取指定链路
      else{
        var cmd=linkSql.getByIds(data.val);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },
  /**
   * 查询链路(ByMachineId)
   * @param {*} param0 
   */
  getByMachineId:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getLinkByMachineId';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 获取所有链路
      else if(data.val.length==0){
        dao.resolve(data.api,[],resolve,httpRes)
      }
      // 获取指定链路
      else{
        var cmd=linkSql.getByMachineIds(data.val);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },
  /**
   * 增加链路
   * @param {*} param0
   */
  add:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='addLink';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 新增设备
      else{
        var cmd = linkSql.insert(data);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data0.insertId,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除链路(ById)
   * @param {*} param0
   */
  deleteById:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteLinkById';
      console.log(Date.now()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除所有链路
      else if(data.val.length==0){
        dao.resolve(data.api,data.val,resolve,httpRes)
      }
      // 删除指定链路
      else{
        var cmd=linkSql.deleteByIds(data.val);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,data.val,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除链路(ByWarning)
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
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,warning_id,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除链路(ByMachine)
   * @param {*} param0 
   */
  deleteByMachine:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteLinkByMachine';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除指定设备
      else{
        var cmd=linkSql.deleteByMachineIds(data.val);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          // Debug
          data0 => dao.resolve(data.api,data0,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除链路(ByLink)
   * @param {*} param0 
   */
  deleteByLink:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='deleteLinkByLink';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      // 删除指定设备
      else{
        var link_id=[];
        for(var i=0;i<data.val.length;i++){
          link_id.push(data.val[i].link_id);
        }
        var cmd=linkSql.deleteByIds(link_id);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,link_id,resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 修改链路详情
   * @param {*} param0 
   */
  changeDetail:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='changeLinkDetail';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else{
        var cmd= linkSql.updateById(data);
        // console.log(cmd);
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(data.api,[data.val.link_id],resolve,httpRes),
          data0 => dao.reject(data.api,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 修改链路告警标识
   * @param {*} param0 
   */
  changeStatus:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='changeLinkStatus';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      else{
        // addWarning
        if(data.api=='/addWarning'){
          var prop=`link_status='1'`;
        }
        // deleteWarning
        else if(data.api=='/deleteWarning'){
          var prop=`link_status='2'`;
        }

        var warning_aim_id=[];
        for(var i=0;i<data.val.length;i++){
          if(data.val[i].warning_aim=='link')
            warning_aim_id.push(data.val[i].warning_aim_id)
        }

        // []
        if(warning_aim_id.length==0){
          dao.resolve(data.api,data.val,resolve,httpRes)
        }
        // [···]
        else{
          var cmd=linkSql.updateByIds(prop, warning_aim_id);
          // console.log(cmd);
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