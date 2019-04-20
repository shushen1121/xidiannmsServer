const strUtil=require('../../utils/strUtil');
const sql={
  getAll:()=>{
    return `SELECT a.*, 
    b.name AS from_machine_name, 
    (SELECT c.name FROM machine c WHERE a.to_machine = c.machine_id) AS to_machine_name 
    FROM link a, machine b 
    WHERE a.from_machine = b.machine_id `;
  },
  getByIds:(ids)=>{
    return sql.getAll() + `and link_id in (${ids.join(',')})`;
  },
  getByMachineIds:(ids)=>{
    return sql.getAll() + `and from_machine in (${ids.join(',')}) or to_machine in (${ids.join(',')})`;
  },
  insert:(data)=>{
    return `insert into link ${strUtil.jsObjToSQLProp_insert(data.val)}`;
  },
  deleteAll:()=>{
    return `delete from link `;
  },
  deleteByIds:(ids)=>{
    return sql.deleteAll() + `where link_id in (${ids.join(',')})`;
  },
  deleteByMachineIds:(ids)=>{
    return sql.deleteAll() + `where from_machine in (${id.join(',')}) or to_machine in (${id.join(',')})`;
  },
  updateById:(data)=>{
    return `update link set ${strUtil.jsObjToSQLProp_update(data.val)} where link_id=${data.link_id}`;
  },
  updateByIds:(prop, ids)=>{
    return `update link set ${prop} where link_id in (${ids.join(',')})`
  }
}
module.exports=sql;