const strUtil=require('../../utils/strUtil');
const sql={
  getAll:()=>{
    return `SELECT a.*, 
    b.name AS from_machine_name, 
    (SELECT c.name FROM machine c WHERE a.to_machine = c.machine_id) AS to_machine_name,
    d.description AS link_type_description
    FROM link a, machine b, link_type d
    WHERE a.from_machine = b.machine_id AND a.link_type = d.link_type `;
  },
  getByIds:(ids)=>{
    return sql.getAll() + `and link_id in (${ids.join(',')})`;
  },
  getByMachineIds:(ids)=>{
    return `SELECT * FROM link WHERE from_machine in (${ids.join(',')}) or to_machine in (${ids.join(',')})`;
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
    return `update link set ${strUtil.jsObjToSQLProp_update(data.val)} where link_id=${data.val.link_id}`;
  },
  updateByIds:(prop, ids)=>{
    return `update link set ${prop} where link_id in (${ids.join(',')})`
  }
}
module.exports=sql;