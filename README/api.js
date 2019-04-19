// 登录
const signIn = (req, res) => {
  const method = 'POST',
        api = '/signIn',
        req = {
          account: String,
          password: String
        },
        res = {
          code: 200,
          message: '登录成功',
          data: {
            sessionId: String
          }
        }
}

// 退出
const signOut = (req, res) => {
  const method = 'POST',
        api = '/signOut',
        req = {},
        res = {
          code: 200,
          message: '退出成功',
          data: {
            account: String
          }
        }
}

// 查询设备
const getMachine = (req, res) => {
  const method = 'POST',
        api = '/getMachine',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 查询链路
const getLink = (req, res) => {
  const method = 'POST',
        api = '/getLink',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
};

// 查询告警
const getWarning = (req, res) => {
  const method = 'POST',
        api = '/getWarning',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 删除设备
const deleteMachine = (req, res) => {
  const method = 'POST',
        api = '/deleteMachine',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 删除链路
const deleteLink = (req, res) => {
  const method = 'POST',
        api = '/deleteLink',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
};

// 删除告警
const deleteWarning = (req, res) => {
  const method = 'POST',
        api = '/deleteWarning',
        req = {
          id: []
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 增加设备
const addMachine = (req, res) => {
  const method = 'POST',
        api = '/addMachine',
        req = {
          data: {}
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 增加链路
const addLink = (req, res) => {
  const method = 'POST',
        api = '/addLink',
        req = {
          data: {}
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
};

// 增加告警
const addWarning = (req, res) => {
  const method = 'POST',
        api = '/addWarning',
        req = {
          data: {}
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 修改设备详情
const changeMachineDetail = (req, res) => {
  const method = 'POST',
        api = '/changeMachineDetail',
        req = {
          data: {}
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
}

// 修改链路详情
const changeLinkDetail = (req, res) => {
  const method = 'POST',
        api = '/changeLinkDetail',
        req = {
          data: {}
        },
        res = {
          code: 200,
          message: '查询成功',
          data: []
        }
};