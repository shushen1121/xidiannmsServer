module.exports={
  /**
   * HTTP响应
   * @param {*} param0 
   */
  httpRes:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='httpRes';
      console.log('  '+Date()+' - '+log);
      var resData={
        code,
        data,
        message:code==200?'success':'error'
      }
      httpRes.resJson(resData);
    })
  },

  /**
   * 告警推送
   * @param {*} param0 
   */
  wsSend_warning:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='wsSend_warning';
      console.log('  '+Date()+' - '+log);
      global.EventEmitter.emit('wsWarning',data);
    })
  },

  /**
   * 拓扑修改推送/详情修改推送
   * @param {*} param0 
   */
  wsSend_inform:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='wsSend_inform';
      console.log('  '+Date()+' - '+log);
      global.EventEmitter.emit('wsInform',data);
    })
  },

  /**
   * 登录
   * @param {*} param0 
   */
  signIn:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='signIn';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val.account&&data.val.password)){
        var res={api:data.api,val:'参数无效'};
        reject([res,300,httpRes]);
      }
      else{
        var cmd=`select password,authority from account where account='${data.val.account}'`;
        global.dbQuery(cmd)
        .then(
          data0 => {
            if(data.session.account){
              var res={api:data.api,val:'重复登录'};
              reject([res,300,httpRes]);
            }
            else if(data0.length==0){
              var res={api:data.api,val:'账号不存在'};
              reject([res,300,httpRes]);
            }
            else if(data0[0].password!=data.val.password){
              var res={api:data.api,val:'密码错误'};
              reject([res,300,httpRes]);
            }
            else{
              data.session.authority=data0[0].authority;
              data.session.account=data.val.account;
              var res={
                api:data.api,
                val:{
                  sessionId:data.session.id
                }
              };
              resolve([res,200,httpRes])
            }
          },
          data0 => reject([{api:data.api,val:data0},200,httpRes])
        )
      }
    })
  },

  /**
   * 退出
   * @param {*} param0 
   */
  signOut:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='signOut';
      console.log('  '+Date()+' - '+log);
      if(!data.session.account){
        var res={api:data.api,val:'未登录'};
        reject([res,300,httpRes]);
      }
      else{
        var res={
          api:data.api,
          val:{
            account:data.session.account
          }
        };
        data.session.authority=undefined;
        data.session.account=undefined;
        resolve([res,200,httpRes])
      }
    })
  },

  /**
   * 用户权限
   * @param {*} param0 
   */
  getAuthority:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getAuthority';
      console.log('  '+Date()+' - '+log);
      if(!data.session.authority){
        var res={api:data.api,val:'未登录'};
        reject([res,300,httpRes]);
      }
      else if(data.session.authority<1){
        var res={api:data.api,val:'权限不足'};
        reject([res,300,httpRes]);
      }else{
        resolve([data,200,httpRes]);
      }
    })
  },

  /**
   * 管理员权限
   * @param {*} param0 
   */
  setAuthority:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='setAuthority';
      console.log('  '+Date()+' - '+log);
      if(!data.session.authority){
        var res={api:data.api,val:'未登录'};
        reject([res,300,httpRes]);
      }
      else if(data.session.authority<2){
        var res={api:data.api,val:'权限不足'};
        reject([res,300,httpRes]);
      }else{
        resolve([data,200,httpRes]);
      }
    })
  },

  /**
   * 获取静态信息
   * @param {*} param0 
   */
  getStaticData:function([data,code,httpRes]){
    return new Promise(function(resolve,reject){
      var log='getStaticData';
      console.log('  '+Date()+' - '+log);
      // 参数是否有效
      if(!(data.val instanceof Array)){
        dao.reject(data.api,'参数无效',reject,httpRes);
      }
      var cmd=`select * from ${data.val.join(';select * from ')}`;
      global.dbQuery(cmd)
      .then(
        data0 => resolve([{api:data.api,val:data0},200,httpRes]),
        data0 => reject([{api:data.api,val:data0},300,httpRes])
      )
    })
  }
}