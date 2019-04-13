/**
 * 200+:成功
 *    210:登录成功
 *    215:退出成功
 *    220:查询成功
 *    230:修改成功
 * 
 * 300+:错误
 *  通用
 *    301:数据库错误
 *    302:缺少必要参数,或参数无效
 *  登录
 *    311:重复登录
 *    312:账号不存在
 *    313:账号或密码错误
 *  退出
 *    316:未登录
 *  查询
 *    321:未登录
 *    322:权限不足
 *  修改
 *    331:未登录
 *    332:权限不足
 */
module.exports={
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
oh silly xingxing
