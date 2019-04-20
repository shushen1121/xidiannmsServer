#### 方法
* warning
```js
// 查询告警
get =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[warning]}, 200, httpRes ])

// 增加告警
add =
([ {api,val:{warning}}, code, httpRes ]) => ([ {api,val:[suc.insertId]}, 200, httpRes ])

// 删除告警(ById) Debug
deleteById =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 删除告警(ByWarning)
deleteByWarning =
([ {api,val:[warning]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 删除告警(ByLinkId)
deleteByLinkId =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 删除告警(ByMachineId)
deleteByMachineId =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])
```
* link
```js
// 查询链路
get =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[Link]}, 200, httpRes ])

// 查询链路(ByMachineId)
getByMachineId =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 增加链路
add =
([ {api,val:{link}}, code, httpRes ]) => ([ {api,val:[suc.insertId]}, 200, httpRes ])

// 删除链路(ById)
deleteById =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 删除链路(ByMachine)
deleteByMachine =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[Debug]}, 200, httpRes ])

// 删除链路(ByLink)
deleteByLink =
([ {api,val:[link]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 修改链路详情
changeDetail =
([ {api,val:{link}}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 修改链路状态
changeStatus =
([ {api,val:[warning]}, code, httpRes ]) => ([ {api,val:[warning]}, code, httpRes ])
```
* machine
```js
// 查询设备
get =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[machine]}, 200, httpRes ])

// 增加设备
add =
([ {api,val:{machine}}, code, httpRes ]) => ([ {api,val:[suc.insertId]}, 200, httpRes ])

// 删除设备(ById) TODO
deleteById =
([ {api,val:[id]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 删除设备(ByMachine)
deleteByMachine =
([ {api,val:[machine]}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 修改设备详情
changeDetail =
([ {api,val:{machine}}, code, httpRes ]) => ([ {api,val:[id]}, 200, httpRes ])

// 修改设备告警标识
changeStatus =
([ {api,val:[warning]}, code, httpRes ]) => ([ {api,val:[warning]}, code, httpRes ])
```