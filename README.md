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
// 修改告警信息
const setWarning = (req, res) => {
  const method = 'POST',
    api = '/setWarning',
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

// 返回码
const
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
    name: 'link' || 'machine',
    id: link_id || machine_id
  }
}
// 回复授权请求
wsSendData = { code: 200, message: 'token', data: '获取权限成功' };
wsSendData = { code: 301, message: 'token', data: '参数错误' };
wsSendData = { code: 302, message: 'token', data: '无效参数' };
wsSendData = { code: 303, message: 'token', data: '数据库错误' };
wsSendData = { code: 304, message: 'token', data: '无权限连接' };
```
