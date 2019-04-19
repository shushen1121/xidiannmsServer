const strUtil=require('../../utils/strUtil');
const sql={
  getAll:()=>{
    return `select * from warning`;
  },
  getById:(id)=>{
    return `select * from warning where warning_id in (${id.join(',')})`;
  },
  add:(data)=>{
    return `insert into warning ${strUtil.jsObjToSQLProp_insert(data)}`;
  },
  deleteAll:()=>{
    return `delete from warning`;
  },
  deleteById:(id)=>{
    return `delete from warning where warning_id in (${id.join(',')})`;
  },
  deleteByAimId:(aim,id)=>{
    return `delete from warning where warning_aim_id in (${data.val.join(',')}) and warning_aim='${aim}'`;
  }
}
module.exports=sql;