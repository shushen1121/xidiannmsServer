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
   * 查询链路
   * @param {*} param0
   */
  get:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var last='getLink';
      console.log(Date.now()+'---'+last);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 获取所有链路
      else if(data.val.length==0){
        var cmd=`select * from link`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
        )
      }
      // 获取指定链路
      else{
        var cmd=`select * from link where link_id in (${data.val.join(',')})`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
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
      var last='addLink';
      console.log(Date.now()+'---'+last);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 新增设备
      else{
        var prop=strUtil.jsObjToSQLProp_insert(data.val);
        var cmd = `insert into link ${prop}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,data0.insertId,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
        )
      }
    })
  },

  /**
   * 删除链路(ById) TODO
   * @param {*} param0
   */
  deleteById:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var last='deleteLinkById TODO';
      data0 => dao.resolve(last,data.val,resolve,httpRes);
    })
  },

  /**
   * 删除链路(ByMachine)
   * @param {*} param0 
   */
  deleteByMachine:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var last='deleteLinkByMachine';
      console.log(Date.now()+'---'+last);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 删除指定设备
      else{
        var cmd=`delete from link where from_machine in (${data.val.join(',')}) or to_machine in (${data.val.join(',')})`;
        global.dbQuery(cmd)
        .then(
          // Debug
          data0 => dao.resolve(last,data0,resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
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
      var last='deleteLinkByLink';
      console.log(Date.now()+'---'+last);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      // 删除指定设备
      else{
        var link_id=[];
        for(var i=0;i<data.val.length;i++){
          link_id.push(data.val[i].link_id);
        }
        var cmd=`delete from link where link_id in (${link_id.join(',')})`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,link_id,resolve,httpRes),
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
      var last='changeLinkDetail';
      console.log(Date.now()+'---'+last);
      // 参数是否有效
      if(!(data.val instanceof Object)){
        dao.reject(last,'参数无效',reject,httpRes);
      }
      else{
        var prop=strUtil.jsObjToSQLProp_update(data.val);
        var cmd=`update link set ${prop} where link_id=${data.val.link_id}`;
        global.dbQuery(cmd)
        .then(
          data0 => dao.resolve(last,[data.val.link_id],resolve,httpRes),
          data0 => dao.reject(last,data0,reject,httpRes)
        )
      }
    })
  }
}