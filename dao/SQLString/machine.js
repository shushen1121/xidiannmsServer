const strUtil=require('../utils/strUtil');
const sql={
  getAll:()=>{
    return `select * from machine`;
  },
  getById:(id)=>{
    return `select * from machine where machine_id in (${id.join(',')})`;
  },
  add:(data)=>{
    return `insert into machine ${strUtil.jsObjToSQLProp_insert(data)}`;
  },
  deleteAll:()=>{
    return `delete from machine`;
  },
  deleteById:(id)=>{
    return `delete from machine where machine_id in (${id.join(',')})`;
  },
  change:(data)=>{
    return `update machine set ${strUtil.jsObjToSQLProp_update(data)} where machine_id=${data.link_id}`;
  }
}
module.exports=sql;