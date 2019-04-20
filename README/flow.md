#### 流程
* getWarning
```
查询告警 > HTTP响应
```
* addWarning
```
增加告警 > 查询告警 > 修改链路/设备状态 > WS推送
        > HTTP响应
```
* deleteWarning
```
查询告警 > 修改链路/设备状态 > 删除告警(byWarning) > WS推送
                                                > HTTP响应
```
* getLink
```
查询链路 > HTTP响应
```
* addLink
```
增加链路 > WS推送
        > HTTP响应
```
* deleteLink
```
查询链路 > 删除链路(byLink) > 删除告警(ByLinkId) > WS推送
                          > HTTP响应
```
* changeLinkDetail
```
修改链路详情 > 查询链路 > WS推送
            > HTTP响应
```
* getMachine
```
查询设备 > HTTP响应
```
* addMachine
```
增加设备 > WS推送
        > HTTP响应
```
* deleteMachine
```
查询设备 > 删除设备(ByMachine) > 删除告警(ByMachineId)
                                查询链路(ByMachineId) > 删除链路(ByLink) > 删除告警(ByLinkId) > WS推送
                             > HTTP响应
```
