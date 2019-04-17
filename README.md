# 名称
xidiannmsServer<br>
# 说明
xidian Network Management System Server<br>
# 启动
> npm install<br>
> node index.js<br>
# 依赖
"body-parser": "^1.18.3"<br>
"express": "^4.16.4"<br>
"express-mysql-session": "^2.1.0"<br>
"express-session": "^1.15.6"<br>
"mysql": "^2.16.0"<br>
"ws": "^6.2.1"<br>
# 结构
#### 流程
```
getWarning:           查询告警 》 HTTP响应


addWarning:           增加告警 》 查询告警 》 修改链路/设备告警标识
                                         》 告警推送
                              》 HTTP响应


deleteWarning:        查询告警 》 修改链路/设备告警标识 》 删除告警(byWarning) 》 HTTP响应
                                                                           》 告警推送


getLink:              查询链路 》 HTTP响应


addLink:              增加链路 》 HTTP响应
                              》 拓扑修改推送


deleteLink:           查询链路 》 删除链路(byLink) 》 HTTP响应 
                                                 》 拓扑修改推送

changeLinkDetail:     修改链路详情 》 查询链路 》 详情修改推送
                                  》 HTTP响应


getMachine:           查询设备 》 HTTP响应


addMachine:           增加设备 》 HTTP响应
                              》 拓扑修改推送

// TODO
deleteMachine:        查询设备 》 删除设备(ByMachine) 》 删除链路(ByMachine) 》 拓扑修改推送
                                                    》 HTTP响应 


changeMachineDetail:  修改设备详情  》 查询设备 》 详情修改推送
                                   》 HTTP响应
```
#### 方法
```
([ data, code, httpRes ])
<!-- warning -->

查询告警
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'getWarning',val:[warning]}, 200, httpRes ])

增加告警
([ {last,val:{warning}}, code, httpRes ]) => ([ {last:'addWarning',val:[suc.insertId]}, 200, httpRes ])

删除告警(ById) Debug
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'deleteWarningById',val:[id]}, 200, httpRes ])

删除告警(ByWarning)
([ {last,val:[warning]}, code, httpRes ]) => ([ {last:'deleteWarningByWarning',val:[id]}, 200, httpRes ])

删除告警(ByLink_or_Machine)
([ {last,val:[link_or_machine]}, code, httpRes ]) => ([ {last:'deleteWarningByLink_or_Machine',val:[id]}, 200, httpRes ])

<!-- machine -->

查询设备
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'getMachine',val:[machine]}, 200, httpRes ])

增加设备
([ {last,val:{machine}}, code, httpRes ]) => ([ {last:'addMachine',val:[suc.insertId]}, 200, httpRes ])

删除设备(ById) TODO
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'deleteMachineById',val:[id]}, 200, httpRes ])

删除设备(ByMachine)
([ {last,val:[machine]}, code, httpRes ]) => ([ {last:'deleteMachineByMachine',val:[id]}, 200, httpRes ])

修改设备详情
([ {last,val:{machine}}, code, httpRes ]) => ([ {last:'changeMachineDetail',val:[id]}, 200, httpRes ])

<!-- link -->

查询链路
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'getLink',val:[Link]}, 200, httpRes ])

增加链路
([ {last,val:{link}}, code, httpRes ]) => ([ {last:'addLink',val:[suc.insertId]}, 200, httpRes ])

删除链路(ById)
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'deleteLinkById',val:[id]}, 200, httpRes ])

删除链路(ByMachine)
([ {last,val:[id]}, code, httpRes ]) => ([ {last:'deleteLinkByMachine',val:[Debug]}, 200, httpRes ])

删除链路(ByLink)
([ {last,val:[link]}, code, httpRes ]) => ([ {last:'deleteLinkByLink',val:[id]}, 200, httpRes ])

修改链路详情
([ {last,val:{link}}, code, httpRes ]) => ([ {last:'changeLinkDetail',val:[id]}, 200, httpRes ])

<!-- other -->
HTTP响应
([ {last,val}, code, httpRes ]) => ( )

告警推送
([ {last,val}, code, httpRes ]) => ( )

拓扑修改推送
([ {last,val}, code, httpRes ]) => ( )

详情修改推送
([ {last,val}, code, httpRes ]) => ( )

修改链路/设备告警标识
([ {last,val}, code, httpRes ]) => ([ {last,val}, code, httpRes ])

权限检查
([ {req}, code, httpRes ]) => ([ {last,val:req.body.···}, code, httpRes ])
```
# API
#### http
```javascript
// 登录
const signIn = (req, res) => {
  const method = 'POST',
    api = '/signIn',
    req = {
      account: String,
      password: String
    },
    res = {
      code: 210,
      message: '登录成功',
      data: {
        name: 'sessionId',
        results: session_id
      }
    };
}
// 退出
const signOut = (req, res) => {
  const method = 'POST',
    api = '/signIn',
    req = { },
    res = {
      code:211,
      message:'退出成功',
      data:{ }
    };
}
// 获取拓扑结构
const getTopology = (req, res) => {
  const method = 'POST',
    api = '/getTopology',
    req = {
      areaId: Number // TODO
    },
    res = {
      code:220,
      message:'查询成功',
      data:{
        name: area_id, // TODO
        results: [
          {
            type: 'link',
            data: [ ]
          },
          {
            type: 'machine',
            data: [ ]
          }
        ]
      }
    }
}
// 获取设备详情
const getMachineDetail = (req, res) => {
  const method = 'POST',
    api = '/getMachineDetail',
    req = {
      machine_Id: [ ]
    },
    res = {
      code: 220,
      message: '查询成功',
      data: [ ]
    }
};
// 获取链路详情
const getLinkDetail = (req, res) => {
  const method = 'POST',
    api = '/getLinkDetail',
    req = {
      link_Id: [ ]
    },
    res = {
      code: 220,
      message: '查询成功',
      data: [ ]
    }
};
// 获取告警信息
const getWarning = (req, res) => {
  const method = 'POST',
    api = '/getWarning',
    req = { },
    res = {
      code: 220,
      message: '查询成功',
      data: [ ]
    }
}
// 获取静态信息
const staticData = (req, res) => {
  const method = 'POST',
    api = '/staticCreate_way' || 
          '/staticLink_status' || 
          '/staticLink_type' ||
          '/staticMachine_type' ||
          '/staticWarning_level' ||
          '/staticWarning_type' ,
    req = { },
    res = {
      code: 200,
      message: '成功',
      data: [ ]
    }
}
// 修改设备详情
const setMachineDetail = (req, res) => {
  const method = 'POST',
    api = '/setMachineDetail',
    req = {
      type: 'change' || 'new',
      id: Number,
      data: { }
    },
    res = {
      code: 230,
      message: '修改成功',
      data: { }
    }
};
// 修改链路详情
const setLinkDetail = (req, res) => {
  const method = 'POST',
    api = '/setLinkDetail',
    req = {
      type: 'change' || 'new',
      id: Number,
      data: { }
    },
    res = {
      code: 230,
      message: '修改成功',
      data: { }
    }
};
// 新增告警信息
const addWarning = (req, res) => {
  const method = 'POST',
    api = '/addWarning',
    req = {
      data: { }
    },
    res = {
      code: 230,
      message: '修改成功',
      data: { }
    }
};
// 删除告警信息
const deleteWarning = (req, res) => {
  const method = 'POST',
    api = '/deleteWarning',
    req = {
      id: Number
    },
    res = {
      code: 230,
      message: '修改成功',
      data: { }
    }
};

// 返回码
const logInfo = {
  log_200:{
    code:200,
    message:'成功',
    data:{
      name:undefined,
      results:undefined
    }
  },
  log_210:{
    code:210,
    message:'登录成功',
    data:{
      name:undefined,
      results:undefined
    }
  },
  log_215:{
    code:211,
    message:'退出成功',
    data:{
      name:undefined,
      results:undefined
    }
  },
  log_220:{
    code:220,
    message:'查询成功',
    data:{
      name:undefined,
      results:undefined
    }
  },
  log_230:{
    code:230,
    message:'修改成功',
    data:{
      name:undefined,
      results:undefined
    }
  },

  log_300:{
    code:300,
    message:'失败',
    data:'错误'
  },
  log_301:{
    code:301,
    message:'失败',
    data:'数据库错误'
  },
  log_302:{
    code:301,
    message:'失败',
    data:'缺少必要参数,或参数无效'
  },
  log_311:{
    code:311,
    message:'登录失败',
    data:'重复登录'
  },
  log_312:{
    code:301,
    message:'登录失败',
    data:'账号不存在'
  },
  log_313:{
    code:301,
    message:'登录失败',
    data:'账号或密码错误'
  },
  log_316:{
    code:301,
    message:'退出失败',
    data:'未登录'
  },
  log_321:{
    code:311,
    message:'查询失败',
    data:'未登录'
  },
  log_322:{
    code:301,
    message:'查询失败',
    data:'权限不足'
  },
  log_331:{
    code:311,
    message:'修改失败',
    data:'未登录'
  },
  log_332:{
    code:301,
    message:'修改失败',
    data:'权限不足'
  }
}
```
#### webSocket
```javascript
// client
// 请求授权
wsSendData = {
  token: session_id
}

// server
// 连接成功
wsSendData = {
  message: 'wsInfo',
  data: {
    name: 'wsKey',
    results: sec-websocket-key
  }
}
// 最新告警
wsSendData = {
  message: 'warning',
  data: { }
}
// 通知更新
wsSendData = {
  message: 'inform',
  data: {
    name: 'link' || 'machine' || 'topology',
    id: link_id || machine_id || undefined
  }
}
// 回复授权请求
wsSendData = { code: 200, message: 'token', data: '获取权限成功' };
wsSendData = { code: 301, message: 'token', data: '参数错误' };
wsSendData = { code: 302, message: 'token', data: '无效参数' };
wsSendData = { code: 303, message: 'token', data: '数据库错误' };
wsSendData = { code: 304, message: 'token', data: '无权限连接' };
```
