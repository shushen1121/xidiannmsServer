#### webSocket
```js
// 推送 toClient
const wsInform = {
  message: 'inform',
  data: {
    name: 'link' || 'machine' || 'topology' || 'warning',
    result: linkDetail || machineDetail || undefined || {type:'add'||'delete', data: warningDetail, id:[]}
  }
}

// 获取权限 toServer
const wsTokenReq = {
  token: sessionId
}

// 获取权限响应 toClient
const wsTokenRes = {
  code: 200,
  message: 'token',
  data: '获取权限成功'
}
```