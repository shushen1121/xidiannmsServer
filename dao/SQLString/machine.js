const strUtil=require('../../utils/strUtil');
const sql={
  getAll:()=>{
    return `select a.*, b.description as machine_type_description 
    from machine a, machine_type b `;
  },
  getByIds:(id)=>{
    return sql.getAll() + `where machine_id in (${id.join(',')})`;
  },
  insert:(data)=>{
    return `insert into machine ${strUtil.jsObjToSQLProp_insert(data)}`;
  },
  deleteAll:()=>{
    return `delete from machine `;
  },
  deleteByIds:(ids)=>{
    return sql.deleteAll() + `where machine_id in (${ids.join(',')})`;
  },
  updateById:(data)=>{
    return `update machine set ${strUtil.jsObjToSQLProp_update(data.val)} where machine_id=${data.val.machine_id}`;
  },
  updateByIds:(prop, ids)=>{
    return `update machine set ${prop} where machine_id in (${ids.join(',')})`;
  }
}
module.exports=sql;